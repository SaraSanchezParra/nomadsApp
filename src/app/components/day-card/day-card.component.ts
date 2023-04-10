import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Day } from 'src/app/models/day';
import { User } from 'src/app/models/user';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.css']
})
export class DayCardComponent {

  @Output() cardEvent = new EventEmitter<number>

  user: User
  @Input() dia!:Day
  @Input() i!:number
  ReadMore: boolean = true
  visible: boolean = false

  constructor(public userService: DatosUsuarioService, private router: Router) {
    this.user=this.userService.user
  }

  onClick() {
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible
  }

  areMisViajes():boolean{
    let ismine: boolean = false
    for (let viaje of this.user.misviajes){
      if (viaje.days.includes(this.dia)) {
        ismine = true
      }
    }
    return ismine
  }

  borrarDia() {
    let ref = this.i;
    this.cardEvent.emit(ref)
    
  }

  editarDia() {
    let ref = this.i;
    this.cardEvent.emit(ref)
    this.router.navigate(['/modificarDia'])
  }
}
