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
  public menuVisible=false;

  constructor(private router: Router, public location: Location, private userService:DatosUsuarioService) {

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

