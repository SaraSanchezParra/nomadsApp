import { Component, Input } from '@angular/core';
import { PuntoDeInteres } from 'src/app/models/punto-de-interes';

@Component({
  selector: 'app-card-punto-interes',
  templateUrl: './card-punto-interes.component.html',
  styleUrls: ['./card-punto-interes.component.css']
})
export class CardPuntoInteresComponent {

  @Input() puntoDeInteres!:PuntoDeInteres

  
}
