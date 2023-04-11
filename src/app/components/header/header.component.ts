import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuVisible=false;

  constructor(private router: Router, public location: Location, public userService: DatosUsuarioService) {
    // this.loged = true;
    
    // this.showHeader = true;
    // console.log(this.location.path())
    // if(this.location.path() === `/landin-page` || this.location.path() === `/login` ||
    // this.location.path() === `/register`){
    //  this.showHeader = false
    //  this.loged = false
  // }
  
  }
  mostrarMenu() {
    this.menuVisible = !this.menuVisible; // Invertir el valor actual
    const menuContainer = document.querySelector('.menu-container');
    if (menuContainer) {
      if (this.menuVisible) {
        menuContainer.classList.add('visible');
      } else {
        menuContainer.classList.remove('visible');
      }
    }
  }

    ocultarMenu() {
        this.menuVisible = false;
    }
}
