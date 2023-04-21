import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmComponent } from 'src/app/dialogs/confirm/confirm.component';
import { User } from 'src/app/models/user';
import { Viaje } from 'src/app/models/viaje';
import { PerfilComponent } from 'src/app/pages/perfil/perfil.component';
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
 

  constructor(public router: Router, private dialogService: DialogService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  goToViaje() {
    console.log("take to viaje");

    let ref = this.cardviaje.viaje_id;
    this.viajeEvent.emit(ref)


  }

  editarViaje() {
    let ref = this.cardviaje.viaje_id
    this.modifyEvent.emit(ref)
    // this.router.navigate(['/modificarViaje'])
    //esto debería de mandar el id de viaje
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: '¿Estás seguro de que quieres eliminarlo?'
    }); 
    dialogRef.afterClosed().subscribe( res => {
      console.log(res);
      if (res) {
        let ref = this.cardviaje.viaje_id
        console.log(ref);
        
    this.cardEvent.emit(ref)
      }
    })
  }

  goProfile() {
    let ref = this.cardviaje.user_id_propietario
    this.profileEvent.emit(ref)
  }



}
