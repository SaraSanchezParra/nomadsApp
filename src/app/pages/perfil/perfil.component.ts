
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
  
  
  constructor(private router:Router) {
    
    this.user = {
      name: 'Estefi',
      surname: 'Martin',
      email: 'estefi@stefi',
      username: '@estefi',
      descripcion: "Hola, me llamo Estefi y soy una viajera empedernida.",
      photo:'https://www.sevillainfo.es/wp-content/uploads/2022/05/IMG-0810.jpg',
      favs: [
        {imagen:"", titulo:'Málaga Costa', descripcion:'Visita la costa del Sol y nunca querrás irte', likes:290},
        {imagen:"", titulo:'Sevilla', descripcion:'Disfruta de su color y su encanto', likes:120},
        {imagen:"https://media.istockphoto.com/id/1059076792/es/foto/madrid-ciudad-skyline-gran-v%C3%ADa-calle-crep%C3%BAsculo-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=gWGpBRHVNJleHrVRmetRPTFuau_aahvCUKDMNfCrMNE=", titulo:'Madrid Centro', descripcion:'Como siempre, de Madrid al cielo', likes:600}
      ],
      misviajes: [
        {imagen:"https://www.hosteleriasalamanca.es/fotos/16609023601.jpg", titulo:'Salamanca', descripcion:'Piérdete por sus calles', likes:260},
        {imagen:"", titulo:'Porrua', descripcion:'El pueblo con más encanto de España', likes:490},
        {imagen:"", titulo:'Galicia', descripcion:'Su gente, su marisco, sus paisajes...CALIDADE', likes:300}
      ]
    };
    console.log(this.user);
    
    console.log(this.user.favs[2].imagen);
    
    
  }
  
  public mostrarFavoritas(): void {
    this.showFavs = true;
    this.showIcons = false;
  }
  
  public mostrarMisViajes(): void {
   this.showFavs = false;
   this.showIcons = true;
  }
  public editarViaje(i: number): void {
    // this.router.navigate(['/modificarViaje'])
    //navigate a modificar viaje
    // const nuevoTitulo = prompt('Ingresa el nuevo título del viaje:');
    // const nuevaDescripcion = prompt('Ingresa la nueva descripción del viaje:');
    // if (nuevoTitulo && nuevaDescripcion) {
    //   this.user.misviajes[i].titulo = nuevoTitulo;
    //   this.user.misviajes[i].descripcion = nuevaDescripcion;
    // }
  }
  
  public borrarViaje(i: number): void {
    this.user.misviajes.splice(i, 1);
  }
  
}

