import { Component } from '@angular/core';
import { Map, tileLayer } from 'leaflet';
import { Day } from 'src/app/models/day';
import { PuntoDeInteres } from 'src/app/models/punto-de-interes';
import { Respuesta } from 'src/app/models/respuesta';
import { Viaje } from 'src/app/models/viaje';
import { ViajeService } from 'src/app/shared/viaje.service';

@Component({
  selector: 'app-pagina-viaje',
  templateUrl: './pagina-viaje.component.html',
  styleUrls: ['./pagina-viaje.component.css']
})
export class PaginaViajeComponent {

  viaje_id: number
viaje: Viaje
dia: Day
dia2: Day
fav: boolean

constructor(public ViajeService: ViajeService) {
  this.ViajeService.getViaje(1).subscribe((answer: Respuesta) => {
    this.viaje = answer.data_viaje[0];
    console.log(answer);
    
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
    this.ViajeService.getDay(cardMessage.index).subscribe((answer: Respuesta) => {
      let openday = answer.data_dia;
    })
  }
  else {
    console.log("is closed" + cardMessage.isOpen);
  }
}

eliminar(i:number) {
  this.viaje.days.splice(i, 1)
}
}
