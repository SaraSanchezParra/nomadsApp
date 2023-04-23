import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chats } from 'src/app/models/chat';
import { Router } from '@angular/router';
import { ConfirmComponent } from 'src/app/dialogs/confirm/confirm.component';
import { DialogService } from 'src/app/services/dialog.service';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-card-chat',
  templateUrl: './card-chat.component.html',
  styleUrls: ['./card-chat.component.css']
})
export class CardChatComponent {

  @Input() cardGeneral: Chats
  @Output() eliminarTarjeta = new EventEmitter();
  @Output() mensajesDeChat=new EventEmitter();
  constructor(private router: Router, private dialogService: DialogService, public dialog: MatDialog) {}


  openDialog() {
    // this.dialogService.confirmDialog();
    // console.log('open dialog');

    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: ' ¿Estás seguro de que quieres eliminar este chat?'
    }); 

    dialogRef.beforeClosed().subscribe( res => {
      console.log(res);
      if (res) {
        this.eliminarTarjeta.emit(this.cardGeneral.chat_id);
      }
    })
  }
  
  irMensajes(){
    this.mensajesDeChat.emit(this.cardGeneral.chat_id)
    this.router.navigate(['/chatPrivado']);
  }
}
