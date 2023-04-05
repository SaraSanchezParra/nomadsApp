
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  
  public user = { name: '', surname: '', email: '', username: '', descripcion:"",photo:'', favs: [], misviajes: [] };

  public showFavs = true;
  public showIcons = false;
  
  
  constructor() {
    
    this.user = {
      name: 'Estefi',
      surname: 'Martin',
      email: 'estefi@stefi',
      username: '@estefi',
      descripcion: "Hola, me llamo Estefi y soy una viajera empedernida.",
      photo:'https://www.sevillainfo.es/wp-content/uploads/2022/05/IMG-0810.jpg',
      favs: [
        {img:"", titulo:'Málaga Costa', descripcion:'Visita la costa del Sol y nunca querrás irte', likes:290},
        {img:"", titulo:'Sevilla', descripcion:'Disfruta de su color y su encanto', likes:120},
        {img:"", titulo:'Madrid Centro', descripcion:'Como siempre, de Madrid al cielo', likes:600}
      ],
      misviajes: [
        {img:"", titulo:'Salamanca', descripcion:'Piérdete por sus calles', likes:260},
        {img:"", titulo:'Porrua', descripcion:'El pueblo con más encanto de España', likes:490},
        {img:"", titulo:'Galicia', descripcion:'Su gente, su marisco, sus paisajes...CALIDADE', likes:300}
      ]
    };
    console.log(this.user);
    
    
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
    const nuevoTitulo = prompt('Ingresa el nuevo título del viaje:');
    const nuevaDescripcion = prompt('Ingresa la nueva descripción del viaje:');
    if (nuevoTitulo && nuevaDescripcion) {
      this.user.misviajes[i].titulo = nuevoTitulo;
      this.user.misviajes[i].descripcion = nuevaDescripcion;
    }
  }
  
  public borrarViaje(i: number): void {
    this.user.misviajes.splice(i, 1);
  }
  
}

