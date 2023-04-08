import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-chat-privado',
  templateUrl: './chat-privado.component.html',
  styleUrls: ['./chat-privado.component.css']
})
export class ChatPrivadoComponent {
  mensajeActual: string = '';
  mensajes: string[] = [];
  mensajePredefinido = 'Hola, ¿cómo estás?';
  mensajePredefinido2 = 'Hola, bien y tu como estas';
  haRespondidoPredefinido: boolean = false;
  bocadilloHeight = '25%';
  mostrarBloquear = false;
  chatBloqueado = false;
  habilitarBotonBloquear = true;
  
 
  



  constructor(private router: Router,private elementRef: ElementRef){
    this.chatBloqueado = false;
  }
  
  navegarAChats() {
    this.router.navigate(['/chatGeneral']);
  }

  enviarMensaje() {
    if (this.mensajeActual.includes(this.mensajePredefinido2) && !this.haRespondidoPredefinido) {
      this.mensajes.push('Estoy bien, gracias.');
      this.haRespondidoPredefinido = true; // establecer haRespondidoPredefinido a true
    } else {
      this.mensajes.push(this.mensajeActual);
    }
    
    this.mensajeActual = '';
  }
  

  toggleMenu() {
    this.mostrarBloquear = !this.mostrarBloquear;
  }
  bloquearChat() {
    const chat = this.elementRef.nativeElement.querySelector('.chat');
    if (this.chatBloqueado) {
      chat.classList.remove('chat-bloqueado');
      this.habilitarBotonBloquear = true;
    } else {
      chat.classList.add('chat-bloqueado');
      this.habilitarBotonBloquear = false;
    }
    this.chatBloqueado = !this.chatBloqueado;
    this.mostrarBloquear = false;
  }
}
