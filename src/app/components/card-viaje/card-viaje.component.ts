import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Viaje } from 'src/app/models/viaje';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-card-viaje',
  templateUrl: './card-viaje.component.html',
  styleUrls: ['./card-viaje.component.css']
})
export class CardViajeComponent implements OnInit {

  @Output() cardEvent = new EventEmitter<number>
  @Output() modifyEvent = new EventEmitter<number>
  @Output() profileEvent = new EventEmitter<number>
  @Output() viajeEvent = new EventEmitter<number>

  user: User
  // @Input() viaje!: Viaje;
  @Input() cardviaje!: Viaje;
  @Input() i: number;
  @Input() viajesMios!: boolean;

  constructor(public router: Router, private dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

  goToViaje() {
    console.log("take to viaje");

    let ref = this.cardviaje.viaje_id;
    this.viajeEvent.emit(ref)


  }

  borrarViaje() {
    let ref = this.i;
    this.cardEvent.emit(ref)
  }

  editarViaje() {
    let ref = this.cardviaje.viaje_id
    this.modifyEvent.emit(ref)
    // this.router.navigate(['/modificarViaje'])
    //esto debería de mandar el id de viaje
  }

  openDialog() {
    this.dialogService.confirmDialog();
    console.log('open dialog');
  }

  goProfile() {
    let ref = this.cardviaje.user_id_propietario
    this.profileEvent.emit(ref)
  }



}
