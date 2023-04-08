
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  
  public user = { name: '', surname: '', email: '', username: '', descripcion:"",photo:'', favs: [], misviajes: [] };

  public showFavs = true;
  public showIcons = false;
  public loged:Boolean;
  
  
  constructor(private router:Router) {
    this.loged = true;
    this.user = {
      name: 'Estefi',
      surname: 'Martin',
      email: 'estefi@stefi',
      username: '@estefi',
      descripcion: "Hola, me llamo Estefi y soy una viajera empedernida.",
      photo:'https://www.sevillainfo.es/wp-content/uploads/2022/05/IMG-0810.jpg',
      favs: [
        {imagen:"https://www.costacruceros.es/content/dam/costa/costa-magazine/article-images/things-to-do-in-malaga/malaga1.jpg.image.694.390.low.jpg", titulo:'Málaga Costa', descripcion:'Visita la costa del Sol y nunca querrás irte', likes:290},
        {imagen:"https://www.lavanguardia.com/files/content_image_mobile_filter/files/fp/uploads/2019/09/30/5fa52ff369941.r_d.328-221.jpeg", titulo:'Sevilla', descripcion:'Disfruta de su color y su encanto', likes:120},
        {imagen:"https://media.istockphoto.com/id/1059076792/es/foto/madrid-ciudad-skyline-gran-v%C3%ADa-calle-crep%C3%BAsculo-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=gWGpBRHVNJleHrVRmetRPTFuau_aahvCUKDMNfCrMNE=", titulo:'Madrid Centro', descripcion:'Como siempre, de Madrid al cielo', likes:600}
      ],
      misviajes: [
        {imagen:"https://www.hosteleriasalamanca.es/fotos/16609023601.jpg", titulo:'Salamanca', descripcion:'Piérdete por sus calles', likes:260},
        {imagen:"https://ucmedia.er2.co/es/des-main/117/960/23327.jpg?1679833829", titulo:'Porrua', descripcion:'El pueblo con más encanto de España', likes:490},
        {imagen:"https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2023/01/31/playa-de-las-catedrales-en-lugo-galicia.jpeg", titulo:'Galicia', descripcion:'Su gente, su marisco, sus paisajes...CALIDADE', likes:300}
      ]
    };
    console.log(this.user);
    
    console.log(this.user.favs[2].imagen);
      
    
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
    this.router.navigate(['/modificarPerfil'])
  }
  

}

