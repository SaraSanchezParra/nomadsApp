import { Component, ElementRef, ViewChild } from '@angular/core';
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
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  public showFavs = true;
  public showIcons = false;
 
  public usuarioMostrado:User;
  

  
  
  
  constructor(private router:Router, public userService: DatosUsuarioService, private http: HttpClient, public servicioModify: ModifyViajeService, public viajeService: ViajeService, public chatService: ChatsService, public toastr: ToastrService) {
    
    if(this.userService.usuarioBuscado){
      this.usuarioMostrado = this.userService.user_noLoged;
      
    }
    else{
      this.usuarioMostrado = this.userService.user_logged
      console.log("Perfil user:");
    
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
    this.viajeService.getViaje(viaje_idCard).subscribe((answer: Respuesta) => {
      if (answer.error) {
        this.toastr.warning("Error al ir a modificar")
      }
      else {
        this.viajeService.viajeMod = answer.data_viaje[0]
        this.router.navigate(['/modificarViaje'])
      }
    })
    
    
  }
  
   borrarViaje(i: number): void { 
    this.viajeService.viajeNo(i).subscribe((answer: Respuesta) => {
      if (answer.mensaje == '0') {
        this.toastr.error("Viaje no borrado")
      }
      else {
        this.toastr.success("Tu viaje ha sido borrado")
        this.userService.postLogin(this.userService.user_logged).subscribe((answer: Respuesta) => {
          this.userService.user_logged = answer.data_user
        })
      //  let viajeBorradoI =  this.usuarioMostrado.misViajes.findIndex(v => v.viaje_id == i)
      //  this.usuarioMostrado.misViajes.splice(viajeBorradoI, 1)
      }
    })
  }

  goToProfile(user_idCard: number) {
    this.userService.getUserByID(user_idCard).subscribe((answer: Respuesta)=>{
      this.userService.user_noLoged = answer.data_user[0];
      this.userService.usuarioBuscado = true;
      this.router.navigate["/perfil"]
    })
  }

   clickCard(viaje_id: number) {
    if(this.userService.loged)
    this.viajeService.goToViaje(viaje_id)
    else{
      this.userService.showHeaderFooter = false
      this.router.navigate(["/login"])

    }
  }

   ajustesPerfil():void{
    this.router.navigate(['/modificarPerfil'])
  }
  enviarMensaje(){ 
    this.chatService.getChat(this.userService.user_logged.user_id, this.usuarioMostrado.user_id).subscribe((answerGet: any)=>{
      console.log(answerGet);
      if(answerGet.data.length == 0){
        this.chatService.postChat(this.userService.user_logged.user_id, this.usuarioMostrado.user_id, new Date().toISOString().slice(0, 19).replace('T', ' ')).subscribe((answerPost: any)=>{
          if(answerPost.error ){
            console.log(answerPost.error)//meter toastr
          }
          else{
            this.chatService.chat = new Chats(this.usuarioMostrado.photo, 
                                              this.usuarioMostrado.name,
                                              new Date().toISOString().slice(0, 19).replace('T', ' '));
            this.chatService.chat.chat_id = answerPost.data.insertId;
            this.chatService.chat.mensajes = [];
            console.log(answerPost);
            console.log(this.chatService.chat);
            
            this.router.navigate(['/chatPrivado']);
            setTimeout(() => {
              this.scrollToBottom();
            }, 0);
            
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
            this.chatService.chat.hora = new Date().toISOString().slice(0, 19).replace('T', ' ')
          }

        })
        // this.chatService.chat.mensajes = [];
        this.chatService.chat.hora = new Date().toISOString().slice(0, 19).replace('T', ' ')
        this.router.navigate(['/chatPrivado']);
        setTimeout(() => {
          this.scrollToBottom();
        }, 0);
      }

    })
  }

  scrollToBottom(){}
  
  
  iraUser():void{
    this.router.navigate(['/perfil'])
  }
  
  irHome()
  { if (this.userService.loged==false)
    {this.router.navigateByUrl("/home-no-loged")}
    else{
      this.router.navigateByUrl("/home-loged")
    }
  }


}
