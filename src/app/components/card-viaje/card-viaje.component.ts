import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Viaje } from 'src/app/models/viaje';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-card-viaje',
  templateUrl: './card-viaje.component.html',
  styleUrls: ['./card-viaje.component.css']
})
export class CardViajeComponent {

  @Output() cardEvent = new EventEmitter<number>
  @Output() modifyEvent = new EventEmitter<number>
  @Output() profileEvent = new EventEmitter<number>
  @Output() viajeEvent = new EventEmitter<number>

  user: User
  // @Input() viaje!: Viaje;
  @Input() cardviaje!: Viaje;
  @Input() i: number;
  @Input() isLoged: boolean;
  @Input() viajesMios!: boolean;

  constructor(public router: Router, private dialogService: DialogService) {
  }

  goToViaje() {
    console.log("take to viaje");
    if (this.isLoged){
      let ref = this.cardviaje.viaje_Id;
      this.viajeEvent.emit(ref)
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  borrarViaje() {
    let ref = this.i;
    this.cardEvent.emit(ref)
  }

  editarViaje() {
    let ref = this.cardviaje.viaje_Id
    this.modifyEvent.emit(ref)
    // this.router.navigate(['/modificarViaje'])
    //esto debería de mandar el id de viaje
  }

  openDialog() {
    this.dialogService.confirmDialog();
    console.log('open dialog');
  }

  goProfile() {
    let ref = this.cardviaje.user_Id
    this.profileEvent.emit(ref)
  }

  

}
