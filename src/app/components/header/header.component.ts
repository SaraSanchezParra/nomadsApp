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

  menuVisible = false;

  constructor(private router: Router, public location: Location, public userService: DatosUsuarioService) {
    
  }

  mostrarMenu() {
    this.menuVisible = !this.menuVisible;
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

  irAQuienesSomos() {
    this.ocultarMenu();
    this.router.navigate(['/quienesSomos']);
  }

  irAContactanos() {
    this.ocultarMenu();
    this.router.navigate(['/contactanos']);
  }

  irAOnBoarding() {
    this.ocultarMenu();
    this.router.navigate(['/onBoarding']);
  }

  irASobreLaApp() {
    this.ocultarMenu();
    this.router.navigate(['/sobreLaApp']);
  }

}

