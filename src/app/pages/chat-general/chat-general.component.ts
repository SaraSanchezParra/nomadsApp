import { Component } from '@angular/core';
import { CardChatComponent } from 'src/app/components/card-chat/card-chat.component';
import { Chats } from 'src/models/chat';

@Component({
  selector: 'app-chat-general',
  templateUrl: './chat-general.component.html',
  styleUrls: ['./chat-general.component.css']
})
export class ChatGeneralComponent {
  public formattedTime: string;
  chats: Chats[] = [
    {
      photo: 'https://img.freepik.com/foto-gratis/mujer-hermosa-joven-mirando-camara-chica-moda-verano-casual-camiseta-blanca-pantalones-cortos-hembra-positiva-muestra-emociones-faciales-modelo-divertido-aislado-amarillo_158538-15796.jpg',
      nameUser: 'Contacto1',
      hour: "12:00"
    },
    {
      photo: 'https://img.freepik.com/foto-gratis/chico-worldface-espanol-fondo-blanco_53876-137665.jpg?w=2000',
      nameUser: 'Contacto2',
      hour: "01:20"
    },

    {
      photo: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/09/Resena-La-chica-salvaje-El-misterio-es-el-nuevo-lenguaje-del-amor.jpg?fit=1280%2C720&quality=80&ssl=1',
      nameUser: 'Contacto3',
      hour: "14:15"
    }

  ]
  constructor() {
    const now: Date = new Date();
    const hours: number = now.getHours();
    const minutes: number = now.getMinutes();
    this.formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    this.chats.push(new Chats('https://img.freepik.com/foto-gratis/mujer-hermosa-joven-mirando-camara-chica-moda-verano-casual-camiseta-blanca-pantalones-cortos-hembra-positiva-muestra-emociones-faciales-modelo-divertido-aislado-amarillo_158538-15796.jpg', 'Contacto4', this.formattedTime));
  }
 
}
