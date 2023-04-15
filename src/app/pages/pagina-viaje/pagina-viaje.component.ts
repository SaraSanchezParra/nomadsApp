import { Component } from '@angular/core';
import { Map, polyline, tileLayer } from 'leaflet';
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
  styleUrls: ['./pagina-viaje.component.css']
})
export class PaginaViajeComponent {

userToCheck: User
viaje_id: number
viaje: Viaje
dia: Day
dia2: Day
fav: boolean
map: Map
own: boolean

constructor(public ViajeService: ViajeService, public userService: DatosUsuarioService) {
  this.userToCheck = this.userService.user_logged
  this.ViajeService.getViaje(1).subscribe((answer: Respuesta) => {
    this.viaje = answer.data_viaje[0];
  this.userToCheck.misViajes.forEach((viajeDePersona) => {
    if (viajeDePersona.viaje_Id === this.viaje.viaje_Id) {
      this.own = true
    }
  })
  })
  // this.dia = new Day([new PuntoDeInteres('https://d1bvpoagx8hqbg.cloudfront.net/originals/nature-madrid-480758233de4362f5443491d3b2e55d9.jpg', 'parque del Retiro'), new PuntoDeInteres('https://lonelyplanetimages.imgix.net/a/g/hi/t/fed1a2b677245627be71a1a62f48fbbc-museo-del-prado.jpg', 'El Prado')])
  // this.viaje = new Viaje('Madrid de los Austrias', 'https://depaseo.eu/wp-content/uploads/2018/09/visita-austrias-A.jpg', 'madrid del siglo de oro', [this.dia, new Day([new PuntoDeInteres('https://www.taquilla.com/data/images/t/27/jardin-botanico.jpg', 'Jardin Botanico')])], 13)
  this.fav=false
}

ngAfterViewInit(): void {
  const map = new Map('map').setView([40.4167047, -3.7035825], 13);
  tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
this.map = map
}

checkfav():boolean {
  if (!this.fav) {
    this.fav=true;
  }
  else {
    this.fav=false
  }
  return this.fav
}

showOnMap(cardMessage) {
  if (cardMessage.isOpen) {
    console.log(cardMessage.isOpen);
  }
  else {
    console.log("is closed" + cardMessage.isOpen);
    console.log(cardMessage);
    this.ViajeService.getDay(cardMessage.index +1).subscribe((answer: Respuesta) => {
      console.log(answer);
      this.viaje.days[cardMessage.index].puntosDeInteres = answer.data_dia;
      console.log(this.viaje);
    });
    let coordinatesList = [];
    this.viaje.days[cardMessage.index].puntosDeInteres.forEach(PI => {
      coordinatesList.push([PI.corLat, PI.corLong])
    });
    // polyline(coordinatesList, {color: '#1F8989'}).addTo(map)
    // como sacar el map de nginitview ?
  }
}

eliminar(i:number) {
  this.viaje.days.splice(i, 1)
}
}
