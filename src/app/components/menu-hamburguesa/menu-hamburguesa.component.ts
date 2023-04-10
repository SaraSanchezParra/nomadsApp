import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu-hamburguesa',
  templateUrl: './menu-hamburguesa.component.html',
  styleUrls: ['./menu-hamburguesa.component.css']
})
export class MenuHamburguesaComponent {

    menuVisible = false;

    constructor(){}

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