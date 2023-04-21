import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chats } from 'src/app/models/chat';
import { Router } from '@angular/router';



@Component({
  selector: 'app-card-chat',
  templateUrl: './card-chat.component.html',
  styleUrls: ['./card-chat.component.css']
})
export class CardChatComponent {

  @Input() cardGeneral: Chats
  @Output() eliminarTarjeta = new EventEmitter();
  @Output() mensajesDeChat=new EventEmitter();
  constructor(private router: Router) {}


  eliminarCard() {
    this.eliminarTarjeta.emit();
  }
  
  irMensajes(){
    this.mensajesDeChat.emit(this.cardGeneral.chat_id)
    this.router.navigate(['/chatPrivado']);
  }
}
