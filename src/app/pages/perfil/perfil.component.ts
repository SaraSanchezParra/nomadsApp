
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
  
  
  constructor() {
    
    this.user = {
      name: 'stefi',
      surname: 'Martin',
      email: 'stefi@stefi',
      username: '@stefi',
      descripcion: "Hola, me llamo Stefi y soy una viajera empedernida.",
      photo:'https://www.sevillainfo.es/wp-content/uploads/2022/05/IMG-0810.jpg',
      favs: [
        {titulo:'Malaga Costa', descripcion:'Visita la costa del Sol y nunca querras irte', likes:290},
        {titulo:'Sevilla', descripcion:'Disfruta de su color y su encanto', likes:120},
        {titulo:'Madrid Centro', descripcion:'Visita la costa del Sol y nunca querras irte', likes:260}
      ],
      misviajes: [
        {titulo:'Madrid Centro', descripcion:'Visita la costa del Sol y nunca querras irte', likes:260},
        {titulo:'Porrua', descripcion:'Visita la costa del Sol y nunca querras irte', likes:490},
        {titulo:'Malaga Costa', descripcion:'Visita la costa del Sol y nunca querras irte', likes:290}
      ]
    };
    console.log(this.user);
    
    
  }
  
  public mostrarFavoritas(): void {
    this.showFavs = true;
  }
  
  public mostrarMisViajes(): void {
   this.showFavs = false;
  }
}

