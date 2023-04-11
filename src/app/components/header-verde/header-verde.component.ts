import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';

@Component({
  selector: 'app-header-verde',
  templateUrl: './header-verde.component.html',
  styleUrls: ['./header-verde.component.css']
})
export class HeaderVerdeComponent {
  public loged: boolean;
  public showHeader: boolean;
  menuVisible=false;

  constructor(private router: Router, public location: Location, private userService:DatosUsuarioService) {
    this.loged = true;
    
    this.showHeader = true;
    if(this.location.path() === `/landin-page` || this.location.path() === `/login` ||
    this.location.path() === `/register`){
     this.showHeader = false
     this.loged = false
  }
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

  irLogin()
  {
    this.userService.loged = false;
    this.userService.showHeaderFooter = false;
    this.router.navigateByUrl("/login");
  }
  

}

