
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
      name: 'stefi',
      surname: 'Martin',
      email: 'stefi@stefi',
      username: '@stefi',
      descripcion: "Hola, me llamo Stefi y soy una viajera empedernida.",
      photo:'https://www.sevillainfo.es/wp-content/uploads/2022/05/IMG-0810.jpg',
      favs: [
        {titulo:'Málaga Costa', descripcion:'Visita la costa del Sol y nunca querrás irte', likes:290},
        {titulo:'Sevilla', descripcion:'Disfruta de su color y su encanto', likes:120},
        {titulo:'Madrid Centro', descripcion:'Como siempre, de Madrid al cielo', likes:600}
      ],
      misviajes: [
        {titulo:'Salamanca', descripcion:'Piérdete por sus calles', likes:260},
        {titulo:'Porrua', descripcion:'El pueblo con más encanto de España', likes:490},
        {titulo:'Galicia', descripcion:'Su gente, su marisco, sus paisajes...CALIDADE', likes:300}
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
}

