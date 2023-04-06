import { Component } from '@angular/core';
import { Day } from 'src/app/models/day';
import { PuntoDeInteres } from 'src/app/models/punto-de-interes';
import { Viaje } from 'src/app/models/viaje';

@Component({
  selector: 'app-pagina-viaje',
  templateUrl: './pagina-viaje.component.html',
  styleUrls: ['./pagina-viaje.component.css']
})
export class PaginaViajeComponent {

viaje: Viaje
dia: Day
dia2: Day
fav: boolean

constructor() {
  this.dia = new Day([new PuntoDeInteres('https://d1bvpoagx8hqbg.cloudfront.net/originals/nature-madrid-480758233de4362f5443491d3b2e55d9.jpg', 'parque del Retiro')])
  this.viaje = new Viaje('Madrid de los Austrias', 'https://depaseo.eu/wp-content/uploads/2018/09/visita-austrias-A.jpg', 'madrid del siglo de oro', [this.dia], 13)
  this.fav=false
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
}
