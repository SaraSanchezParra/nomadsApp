import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Viaje } from 'src/app/models/viaje';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Respuesta } from 'src/app/models/respuesta';
import { ModifyViajeService } from 'src/app/services/modify-viaje.service';
import { ViajeService } from 'src/app/shared/viaje.service';
import { ChatsService } from 'src/app/services/chats.service';
import { Chats } from 'src/app/models/chat';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  public showFavs = true;
  public showIcons = false;
  public loged:boolean;
  public usuarioMostrado:User;
  public soyYo: boolean
  
  
  
  constructor(private router:Router, public userService: DatosUsuarioService, private http: HttpClient, public servicioModify: ModifyViajeService, public viajeService: ViajeService, public chatService: ChatsService) {
    this.loged = true;
    if(this.userService.usuarioBuscado){
      this.usuarioMostrado = this.userService.user_noLoged;
      this.soyYo = false
    }
    else{
      this.usuarioMostrado = this.userService.user_logged
      console.log("Perfil user:");
      this.soyYo = true
      console.log(this.usuarioMostrado);
      
    }

      
  
    
  }
  
  // isMe() {
  //   let res: boolean = false;
  //   if (this.userService.user.username == this.userService.user_logged.username){
  //     res = true
  //   }
  
  // }

  mostrarFavoritas(): void {
    this.showFavs = true;
    this.showIcons = false;
  }
  
  mostrarMisViajes(): void {
   this.showFavs = false;
   this.showIcons = true;
  }
  goToModify(viaje_idCard): void {
    let selectedViaje;
    this.usuarioMostrado.misViajes.forEach((viajeMio) => {
      if (viajeMio.viaje_id === viaje_idCard) {
        selectedViaje = viajeMio
      }
    })
    this.servicioModify.viajeAModificar = selectedViaje
    this.router.navigate(['/modificarViaje'])
  }
  
   borrarViaje(i: number): void {
    // this.viaj.splice(day_id, 1)
  }

  goToProfile(user_idCard: number) {
    this.userService.getUserByID(user_idCard).subscribe((answer: Respuesta)=>{
      this.userService.user_noLoged = answer.data_user[0];
      this.userService.usuarioBuscado = true;
      this.router.navigate["/perfil"]
    })
  }

  goToViaje(viaje_idCard: number) {
    this.viajeService.getViaje(viaje_idCard).subscribe((answer: Respuesta) => {
      this.viajeService.viajes = answer.data_viaje
      this.router.navigate(["/paginaViaje"])
    })
  }

   ajustesPerfil():void{
    this.router.navigate(['/modificarPerfil'])
  }
  enviarMensaje(){
    this.chatService.getChat(this.userService.user_logged.user_id, this.usuarioMostrado.user_id).subscribe((answerGet: any)=>{
      console.log(answerGet);
      if(answerGet.data.length == 0){
        this.chatService.postChat(this.userService.user_logged.user_id, this.usuarioMostrado.user_id, "10:00").subscribe((answerPost: any)=>{
          if(answerPost.error ){
            console.log(answerPost.error)//meter toastr
          }
          else{
            this.chatService.chat = new Chats(this.usuarioMostrado.photo, 
                                              this.usuarioMostrado.name,
                                              "10:00");
            this.chatService.chat.chat_id = answerPost.data.insertId;
            this.chatService.chat.mensajes = [];
            console.log(answerPost);
            console.log(this.chatService.chat);
            
            this.router.navigate(['/chatPrivado'])
            
          }
        })
      }
      else{
        this.chatService.chat = new Chats(this.usuarioMostrado.photo, 
                                          this.usuarioMostrado.name,
                                          answerGet.data[0].hora);

        this.chatService.chat.chat_id = answerGet.data[0].chat_id;

        this.chatService.getMessages(answerGet.data[0].chat_id).subscribe((answerMessages: any)=>{
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

    })
    this.router.navigate(['/chatPrivado'])
  }
  
  iraUser():void{
    this.router.navigate(['/perfil'])
  }
  irHome()
  { if (this.loged==false)
    {this.router.navigateByUrl("/home-no-loged")}
    else{
      this.router.navigateByUrl("/home-loged")
    }
  }




}
