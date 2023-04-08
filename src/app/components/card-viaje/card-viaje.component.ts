import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';

@Component({
  selector: 'app-card-viaje',
  templateUrl: './card-viaje.component.html',
  styleUrls: ['./card-viaje.component.css']
})
export class CardViajeComponent {

@Output() cardEvent = new EventEmitter<number>

userLogged = {username: 'Amber'}
@Input() viaje!: Viaje

constructor() {}

goToViaje(){
  console.log("take to viaje");
}

borrarViaje(){
  let ref = this.viaje.viaje_Id;
  this.cardEvent.emit(ref)
}

editarViaje(){
  let ref = this.viaje.viaje_Id;
  this.cardEvent.emit(ref)
}
}
