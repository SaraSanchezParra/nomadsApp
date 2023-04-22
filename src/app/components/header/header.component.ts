import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/dialogs/confirm/confirm.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuVisible = false;

  constructor(private router: Router, public location: Location, public userService: DatosUsuarioService,public dialog: MatDialog) {
    
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



  openDialog(): void {
    this.ocultarMenu();
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: '¿Está seguro de que desea cerrar la sesión?'
    });
 
    dialogRef.afterClosed().subscribe(res => { 
      console.log(res)
      if (res) {
        this.userService.loged = false;
    this.userService.showHeaderFooter = false;
        this.router.navigate(['/login']); 
       
      }
    });    

  }

}

