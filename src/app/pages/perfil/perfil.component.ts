
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Viaje } from 'src/app/models/viaje';



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
        new Viaje('Malaga Costa', 'https://www.costacruceros.es/content/dam/costa/costa-magazine/article-images/things-to-do-in-malaga/malaga1.jpg.image.694.390.low.jpg', 'Visita la costa del Sol y nunca querrás irte', [], 120), 
        new Viaje('Sevilla', 'https://www.lavanguardia.com/files/content_image_mobile_filter/files/fp/uploads/2019/09/30/5fa52ff369941.r_d.328-221.jpeg', 'Disfruta de su color y su encanto', [], 120), 
        new Viaje('Madrid Centro', 'https://media.istockphoto.com/id/1059076792/es/foto/madrid-ciudad-skyline-gran-v%C3%ADa-calle-crep%C3%BAsculo-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=gWGpBRHVNJleHrVRmetRPTFuau_aahvCUKDMNfCrMNE=', 'Como siempre, de Madrid al cielo', [], 600)
      ],
      misviajes: [ new Viaje('Salamanca', 'https://www.hosteleriasalamanca.es/fotos/16609023601.jpg', 'El pueblo más encantador de España', [], 260),
                   new Viaje ('Segovia', 'https://interrailero.com/wp-content/uploads/2022/07/que-ver-en-segovia-en-un-dia.jpg', 'Visita la ciudad con restos romanos.', [], 20),
                   new Viaje ('Zaragoza', 'https://a.cdn-hotels.com/gdcs/production10/d1442/77b32160-68ce-11e8-8a0f-0242ac11000c.jpg?impolicy=fcrop&w=800&h=533&q=medium', 'De noche o de día, Zaragoza es alegría.', [], 400),
                   new Viaje ('Asturias', 'https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1647207085851-BRMECNXZTR3JTF2XWV74/que-ver-en-espana-picos.jpg?format=1500w', 'Verde que te quiero verde: los mejores paisajes.', [], 800)]
    };
    console.log(this.user);
      
    
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

