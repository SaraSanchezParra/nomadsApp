import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { Chats } from 'src/app/models/chat';
import { RespuestaChat } from 'src/app/models/respuestaChat';
import { User } from 'src/app/models/user';
import { ChatsService } from 'src/app/services/chats.service';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';

@Component({
  selector: 'app-chat-general',
  templateUrl: './chat-general.component.html',
  styleUrls: ['./chat-general.component.css']
})
export class ChatGeneralComponent {
  public usuarioEncontrado = false;
  public chatPrincipal= true;
  public chats: Chats[];
  public chatBuscado: Chats | undefined;
  public textoBusqueda = '';
  public chatsMostrados: Chats[];
  public buscandoUsuario: boolean;
  public user_id_creador: number;
  public user_id_participante: number;
  public indexEncontrado:number;
 


  constructor (private chatService: ChatsService,private userService: DatosUsuarioService,public router: Router)
  {
    this.chats = []
    this.chatsMostrados = this.chats;
    this.buscandoUsuario = false;
    this.chatPrincipal = true; 
    console.log()
    
    this.chatService.getChats(this.userService.user_logged.user_id).subscribe((res: RespuestaChat) => {
    console.log(res);
    this.chats = res.data;
    this.chatsMostrados = this.chats;
  });
  
  }

  buscarUsuario() {
    const nombreBusqueda = this.textoBusqueda.trim().toLowerCase();
    console.log(nombreBusqueda);
    this.buscandoUsuario = true;
    this.chatPrincipal = false;
    this.indexEncontrado = -1;
  
    if (nombreBusqueda!="")
      this.indexEncontrado = this.chats.findIndex(chat => chat.username.toLowerCase().includes(nombreBusqueda));
    console.log(this.indexEncontrado);
    
    this.usuarioEncontrado = (this.indexEncontrado != -1);
    
    if (this.usuarioEncontrado)
    {
      this.chatsMostrados = [this.chats[this.indexEncontrado]];
    }
    else
    {
      this.chatsMostrados = [];
    }
    console.log (this.chatsMostrados);
}


  resetearBusqueda() {
    this.chatBuscado = undefined;
    this.textoBusqueda = '';
    this.usuarioEncontrado= false;
    this.chatPrincipal=true;
    this.buscandoUsuario = false; 
    this.chatsMostrados = this.chats;
  }  

  eliminarTarjeta(chat:Chats) {


    let index = this.chats.findIndex(data => data == chat);
    if (index !== -1) {
      this.chats.splice(index, 1);
    }

    if (this.chatsMostrados.length == 1)
    {
      this.chatsMostrados = [];
    }
    else
    {
      this.chatsMostrados = this.chats;
    }
    
  
    this.chatService.deleteChat(chat.chat_id).subscribe((res: RespuestaChat) => {

      console.log(res);
    });
  }

  irMensajes(chat_id:number){ 

    this.chatService.chat = this.chatsMostrados.find((chatMostrado) => chatMostrado.chat_id == chat_id );
    this.chatService.chat.mensajes = [];
    this.chatService.chat.chat_id = chat_id;

    this.chatService.getMessages(chat_id).subscribe((answerMessages: any)=>{
      if(answerMessages.error ){
        console.log(answerMessages.error)//meter toastr
      }
      else{
        this.chatService.chat.mensajes = answerMessages.data;
        console.log(this.chatService.chat);
      }

    })
    // this.chatService.chat.mensajes = [];
    this.router.navigate(['/chatPrivado'])
    }
}
















  // constructor() {
  //   const now: Date = new Date();
  //   const hours: number = now.getHours();
  //   const minutes: number = now.getMinutes();
  //   this.formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  //   this.chats.push(new Chats('https://img.freepik.com/foto-gratis/mujer-hermosa-joven-mirando-camara-chica-moda-verano-casual-camiseta-blanca-pantalones-cortos-hembra-positiva-muestra-emociones-faciales-modelo-divertido-aislado-amarillo_158538-15796.jpg', 'Contacto4', this.formattedTime));
  // }

// {
      //   photo: 'assets/mujerHermosa.jpg',
      //   nameUser: '@Maria',
      //   hour: "12:00"
      // },
      // {
      //   photo: 'https://img.freepik.com/foto-gratis/chico-worldface-espanol-fondo-blanco_53876-137665.jpg?w=2000',
      //   nameUser: '@pablo',
      //   hour: "01:20"
      // },
  
      // {
      //   photo: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/09/Resena-La-chica-salvaje-El-misterio-es-el-nuevo-lenguaje-del-amor.jpg?fit=1280%2C720&quality=80&ssl=1',
      //   nameUser: '@Ana',
      //   hour: "14:15"
      // },
      // {
      //   photo: 'https://img.freepik.com/foto-gratis/chico-worldface-espanol-fondo-blanco_53876-137665.jpg?w=2000',
      //   nameUser: '@Ruben',
      //   hour: "01:20"
      // },
      // {
      //   photo: 'https://d1bvpoagx8hqbg.cloudfront.net/259/69f3b9690c1ff04fb18b212b5b3aec28.jpg',
      //   nameUser: '@juan',
      //   hour: "01:20"
      // },
      // {
      //   photo: 'https://d1bvpoagx8hqbg.cloudfront.net/259/58c26f1727af2a4080a282cfb893d7ee.jpg',
      //   nameUser: '@David',
      //   hour: "01:20"
      // },
      // {
      //   photo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/8794d08c-6f89-4353-a6ac-f0492d9dc731-profile_image-300x300.png',
      //   nameUser: '@Violeta',
      //   hour: "01:20"
      // },
      
      // this.indexEncontrado = this.chats.findIndex(chat => chat.username.toLowerCase().includes(nombreBusqueda));

            // console.log(this.indexEncontrado);

            // this.usuarioEncontrado = (this.indexEncontrado != -1);

            // if (this.usuarioEncontrado) {
            //     this.chatsMostrados = [this.chats[this.indexEncontrado]];
            // } else {
            //     this.chatsMostrados = [];
            // }

            // console.log(this.chatsMostrados); 
            