import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Viaje } from 'src/app/models/viaje';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';

@Component({
  selector: 'app-card-viaje',
  templateUrl: './card-viaje.component.html',
  styleUrls: ['./card-viaje.component.css']
})
export class CardViajeComponent {

@Output() cardEvent = new EventEmitter<number>

user: User
userLogged = {username: 'Amber'}
@Input() viaje!: Viaje;
@Input() i:number

constructor(public userService: DatosUsuarioService, public router: Router) {
  this.user = userService.user
}

goToViaje(){
  console.log("take to viaje");
  this.router.navigate(['/paginaViaje'])
}

areMisViajes():boolean{
  let ismine: boolean = false
  if (this.user.misviajes.includes(this.viaje)){
    ismine = true
  }
  return ismine
}

borrarViaje(){
  let ref = this.i;
  this.cardEvent.emit(ref)
}

editarViaje(){
  let ref = this.i;
  this.cardEvent.emit(ref)
  //esto debería de mandar el id de viaje
}

}
