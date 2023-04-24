import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Map, marker, polyline, tileLayer } from 'leaflet';
import { map } from 'rxjs';
import { Day } from 'src/app/models/day';
import { PuntoDeInteres } from 'src/app/models/punto-de-interes';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { Viaje } from 'src/app/models/viaje';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { ViajesService } from 'src/app/services/viajes.service';
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

  constructor(
    public ViajeService: ViajeService,
    public userService: DatosUsuarioService,
    public viajesService : ViajesService,
    private _location: Location
  ) {
    // this.fav = false;
    this.userToCheck = this.userService.user_logged;
    this.ViajeService.getViaje(this.ViajeService.viajeDetalle_id).subscribe((answer: Respuesta) => {
      this.viaje = answer.data_viaje[0];
      console.log(this.viaje);
      
      //  check liked
      this.fav = (this.userService.user_logged.favs.findIndex((viajeFav) => viajeFav.viaje_id === this.viaje.viaje_id) != -1);
      console.log(this.fav);
    });
    
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

    if (this.fav) {
      this.ViajeService.unLike(this.viaje.viaje_id, this.userService.user_logged.user_id).subscribe(() => {
        console.log(this.viaje.likes);
        this.fav = false;
        this.viaje.likes--;
        this.userService.user_logged.favs = this.userService.user_logged.favs.filter(fav => fav.viaje_id != this.viaje.viaje_id);

      });
    } else {
      console.log('viaje');
      
      console.log(this.viaje.viaje_id);
      
      this.ViajeService.addLike(this.userService.user_logged.user_id,this.viaje.viaje_id, ).subscribe(() => {
        console.log( this.viaje.likes);
        this.viaje.likes++;
        this.fav = true;
        this.userService.user_logged.favs.push(this.viaje);
      });
    }
  }
  

  showOnMap(cardMessage) {
    if (cardMessage.isOpen) {
      console.log(cardMessage.isOpen);
    } else {
      console.log('is closed' + cardMessage.isOpen);
      console.log(cardMessage);
      this.ViajeService.getDay(cardMessage.dia_id).subscribe(
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
            marker(pair, { opacity: 0.8 }).addTo(this.map).bindPopup(popUpList[iPopUp])
            iPopUp += 1
          })
          polyline(coordinatesList, { color: '#1F8989' }).addTo(this.map);

        }
      );

      // como sacar el map de nginitview ?
    }
  }

  goBack() {
    this._location.back()
  }

  eliminar(i: number) {
    this.viaje.days.splice(i, 1);
  }
}
