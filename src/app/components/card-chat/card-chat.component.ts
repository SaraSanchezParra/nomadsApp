import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chats } from 'src/models/chat';
import { Router } from '@angular/router';



@Component({
  selector: 'app-card-chat',
  templateUrl: './card-chat.component.html',
  styleUrls: ['./card-chat.component.css']
})
export class CardChatComponent {

  @Input() cardGeneral: Chats
  @Output() eliminarTarjeta = new EventEmitter();
  constructor(private router: Router) {}

  irAChatPrivado() {
    this.router.navigate(['/chatPrivado']);
  }

  eliminarCard() {
    this.eliminarTarjeta.emit();
  }
  
}
