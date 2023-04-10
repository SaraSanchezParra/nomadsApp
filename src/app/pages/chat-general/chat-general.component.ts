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
  usuarioNoEncontrado = false;
  chats: Chats[] = [
    {
      photo: 'https://img.freepik.com/foto-gratis/mujerHermosaJoven.jpg',
      nameUser: '@Maria',
      hour: "12:00"
    },
    {
      photo: 'https://img.freepik.com/foto-gratis/chico-worldface-espanol-fondo-blanco_53876-137665.jpg?w=2000',
      nameUser: '@pablo',
      hour: "01:20"
    },

    {
      photo: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/09/Resena-La-chica-salvaje-El-misterio-es-el-nuevo-lenguaje-del-amor.jpg?fit=1280%2C720&quality=80&ssl=1',
      nameUser: '@Ana',
      hour: "14:15"
    },
    {
      photo: 'https://img.freepik.com/foto-gratis/chico-worldface-espanol-fondo-blanco_53876-137665.jpg?w=2000',
      nameUser: '@Ruben',
      hour: "01:20"
    },
    {
      photo: 'https://d1bvpoagx8hqbg.cloudfront.net/259/69f3b9690c1ff04fb18b212b5b3aec28.jpg',
      nameUser: '@juan',
      hour: "01:20"
    },
    {
      photo: 'https://d1bvpoagx8hqbg.cloudfront.net/259/58c26f1727af2a4080a282cfb893d7ee.jpg',
      nameUser: '@David',
      hour: "01:20"
    },
    {
      photo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/8794d08c-6f89-4353-a6ac-f0492d9dc731-profile_image-300x300.png',
      nameUser: '@Violeta',
      hour: "01:20"
    },

  ]

  chatBuscado: Chats | undefined;
  textoBusqueda = '';

  buscarUsuario() {
    this.chatBuscado = this.chats.find(chat => chat.nameUser === this.textoBusqueda);
    if (!this.chatBuscado) {
      this.usuarioNoEncontrado = true;
    } else {
      this.usuarioNoEncontrado = false;
    }
  }

  resetearBusqueda() {
    this.chatBuscado = undefined;
    this.textoBusqueda = '';
    this.usuarioNoEncontrado= false;
  }

  mostrarBotonBusqueda() {
    let searchInput = document.getElementById("search") as HTMLInputElement;
    let searchButton = document.getElementById("search-button");

    if (searchInput.value.trim().length > 0) {
      searchButton.style.display = "inline-block";
    } else {
      searchButton.style.display = "none";
    }
  
  }
  eliminarTarjeta(chat: Chats) {
    const index = this.chats.indexOf(chat);
    if (index !== -1) {
      this.chats.splice(index, 1);
    
    }
  }
  // constructor() {
  //   const now: Date = new Date();
  //   const hours: number = now.getHours();
  //   const minutes: number = now.getMinutes();
  //   this.formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  //   this.chats.push(new Chats('https://img.freepik.com/foto-gratis/mujer-hermosa-joven-mirando-camara-chica-moda-verano-casual-camiseta-blanca-pantalones-cortos-hembra-positiva-muestra-emociones-faciales-modelo-divertido-aislado-amarillo_158538-15796.jpg', 'Contacto4', this.formattedTime));
  // }
 
}
