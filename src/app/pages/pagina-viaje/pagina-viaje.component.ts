import { Component } from '@angular/core';
import { Map, marker, polyline, tileLayer } from 'leaflet';
import { map } from 'rxjs';
import { Day } from 'src/app/models/day';
import { PuntoDeInteres } from 'src/app/models/punto-de-interes';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { Viaje } from 'src/app/models/viaje';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { ViajeService } from 'src/app/shared/viaje.service';

@Component({
  selector: 'app-pagina-viaje',
  templateUrl: './pagina-viaje.component.html',
  styleUrls: ['./pagina-viaje.component.css'],
})
export class PaginaViajeComponent {
  userToCheck: User;
  viaje_id: number;
  viaje: Viaje;
  dia: Day;
  dia2: Day;
  fav: boolean;
  map: Map;
  own: boolean;
  isLiked: boolean;

  constructor(
    public ViajeService: ViajeService,
    public userService: DatosUsuarioService
  ) {
    this.userToCheck = this.userService.user_logged;
    this.ViajeService.getViaje(this.ViajeService.viajeDetalle_id).subscribe((answer: Respuesta) => {
      this.viaje = answer.data_viaje[0];
      //  check own
      this.userToCheck.misViajes.forEach((viajeDePersona) => {
        if (viajeDePersona.viaje_id === this.viaje.viaje_id) {
          this.own = true;
        }
      });
      //  check liked
      this.userService.user_logged.favs.forEach((viajeFav) => {
        if (viajeFav.viaje_id === this.viaje.viaje_id) {
          this.isLiked = true;
        }
      });
    });
    this.fav = false;
  }

  ngAfterViewInit(): void {
    this.map = new Map('map').setView([40.4167047, -3.7035825], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
  }

  likeFunc() {
    if (this.isLiked) {
      this.ViajeService.unLike(
        this.viaje.viaje_id,
        this.userService.user_logged.user_id
      );
      this.isLiked = false;
      this.fav = true;
    } else {
      this.ViajeService.addLike(
        this.userService.user_logged.user_id,
        this.viaje.viaje_id
      );
      this.isLiked = true;
      this.fav = false;
    }
  }

  showOnMap(cardMessage) {
    if (cardMessage.isOpen) {
      console.log(cardMessage.isOpen);
    } else {
      console.log('is closed' + cardMessage.isOpen);
      console.log(cardMessage);
      this.ViajeService.getDay(cardMessage.index + 1).subscribe(
        (answer: Respuesta) => {
          console.log(answer);
          this.viaje.days[cardMessage.index].puntosDeInteres = answer.data_dia;
          console.log(this.viaje);
          let coordinatesList = [];
          let popUpList = []
          let iPopUp = 0
          this.viaje.days[cardMessage.index].puntosDeInteres.forEach((PI) => {
            coordinatesList.push([PI.corLong, PI.corLat]);
            popUpList.push(PI.nombre)
          });
          coordinatesList.forEach((pair) => {
            marker(pair, {opacity: 0.8}).addTo(this.map).bindPopup(popUpList[iPopUp])
            iPopUp += 1
          })
          polyline(coordinatesList, { color: '#1F8989' }).addTo(this.map);

        }
      );

      // como sacar el map de nginitview ?
    }
  }

  eliminar(i: number) {
    this.viaje.days.splice(i, 1);
  }
}
