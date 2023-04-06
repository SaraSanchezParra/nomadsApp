import { Component, Input } from '@angular/core';
import { PuntoDeInteres } from 'src/app/models/punto-de-interes';

@Component({
  selector: 'app-punto-de-interes-card',
  templateUrl: './punto-de-interes-card.component.html',
  styleUrls: ['./punto-de-interes-card.component.css']
})
export class PuntoDeInteresCardComponent {

  @Input() puntoDeInteres!: PuntoDeInteres
}
