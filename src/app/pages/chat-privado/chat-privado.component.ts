import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/models/mensajes';
import { ChatsService } from 'src/app/services/chats.service';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';


@Component({
  selector: 'app-chat-privado',
  templateUrl: './chat-privado.component.html',
  styleUrls: ['./chat-privado.component.css']
})
export class ChatPrivadoComponent {



  public bocadilloHeight:string;
  public mensajeActual:string;


  constructor(private router: Router,
              private elementRef: ElementRef,
              public chatService: ChatsService,
              public userService:DatosUsuarioService){
    
   this.bocadilloHeight = '25%';
   
    this.mensajeActual="";
    this.chatService.getMessages(this.chatService.chat.chat_id).subscribe((respuesta:any)=>
    {
      this.chatService.chat.mensajes=respuesta.data
    })

  }
  
  navegarAChats() {
    this.router.navigate(['/chatGeneral']);
  }

  enviarMensaje() {

    let mensaje:Mensaje=new Mensaje(this.userService.user_logged.user_id,this.mensajeActual,this.chatService.chat.chat_id)
    this.chatService.postMessages(mensaje).subscribe((answerPost: any)=>{
      if(answerPost.error ){
        console.log(answerPost.error)//meter toastr
      }
      else{
        
      this.chatService.chat.mensajes.push(mensaje)
        
        
      }
    })

    this.mensajeActual="";
     
  }
  


}
