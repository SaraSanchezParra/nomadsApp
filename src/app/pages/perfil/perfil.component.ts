
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Viaje } from 'src/app/models/viaje';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  
  public user = { name: '', surname: '', email: '', username: '', descripcion:"",photo:'', favs: [], misviajes: [] };

  public showFavs = true;
  public showIcons = false;
  public loged:boolean;
  public usuarioMostrado:User;
  public usuarioBuscado:User;
  
  
  constructor(private router:Router, public userService: DatosUsuarioService, private http: HttpClient) {
    this.loged = true;
    if(this.userService.usuarioBuscado){
      this.usuarioMostrado = this.userService.user;
    }
    else{
      this.usuarioMostrado = this.userService.user_logged
    }
      

    
  }
  
  isMe() {
    let res: boolean = false;
    if (this.userService.user.username == this.userService.user_logged.username){
      res = true
    }
    return res
  }

   mostrarFavoritas(): void {
    this.showFavs = true;
    this.showIcons = false;
  }
  
  mostrarMisViajes(): void {
   this.showFavs = false;
   this.showIcons = true;
  }
  editarViaje(): void {
    this.router.navigate(['/modificarViaje'])
  }
  
   borrarViaje(i: number): void {
    this.user.misviajes.splice(i, 1);
  }

   ajustesPerfil():void{
    this.router.navigate(['/modificarPerfil'])
  }
  enviarMensaje():void{

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

