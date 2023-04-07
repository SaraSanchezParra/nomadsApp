import { Component, Input } from '@angular/core';
import { Chats } from 'src/models/chat';



@Component({
  selector: 'app-card-chat',
  templateUrl: './card-chat.component.html',
  styleUrls: ['./card-chat.component.css']
})
export class CardChatComponent {

  @Input() cardGeneral: Chats

}
