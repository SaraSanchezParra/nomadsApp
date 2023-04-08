import { Component, Input } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';

@Component({
  selector: 'app-card-viaje',
  templateUrl: './card-viaje.component.html',
  styleUrls: ['./card-viaje.component.css']
})
export class CardViajeComponent {

userLogged = {username: 'Amber'}
@Input() viaje!: Viaje

constructor() {}

goToViaje(){
  console.log("take to viaje");
  
}
}
