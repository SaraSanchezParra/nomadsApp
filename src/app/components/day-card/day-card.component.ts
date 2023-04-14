import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmComponent } from 'src/app/dialogs/confirm/confirm.component';
import { Day } from 'src/app/models/day';
import { User } from 'src/app/models/user';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.css']
})
export class DayCardComponent {

  @Output() cardEvent = new EventEmitter<number>
  @Output() isOpen = new EventEmitter<object>

  user: User
  @Input() dia!:Day
  @Input() i!:number
  ReadMore: boolean = true
  visible: boolean = false

  constructor(public userService: DatosUsuarioService, private router: Router, private dialogService: DialogService, public dialog: MatDialog) {
    this.user=this.userService.user
  }

  onClick() {
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible
    this.isOpen.emit({isOpen: this.ReadMore, index: this.i})
    // create an object with index and boolean and send that to the father
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

  openDialog() {
    // this.dialogService.confirmDialog();
    // console.log('open dialog');
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: ' ¿Estás seguro de que quieres eliminarlo?'
    }); 
    dialogRef.afterClosed().subscribe( res => {
      console.log(res);
      if (res) {
        this.borrarDia()
      }
    })
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
