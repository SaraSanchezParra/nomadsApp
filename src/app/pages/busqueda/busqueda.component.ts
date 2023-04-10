import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  public loged:Boolean
  public redirectToPerfil:Boolean

 
  

  constructor(private router: Router) { 

    this.loged = true;
    this.redirectToPerfil =false;
   
   
    
  }

  navigateToRegister() {
    this.router.navigate(['/login']);
  }
  navigateToPagViaje() {
    this.router.navigate(['/paginaViaje']);
  }

   navigateToPagPerfil() {
    this.router.navigate(['/perfil']);
  }



  onSubmit(form:NgForm) {
    // console.log(form.value)
    if (form.controls.usuario.valid) {
    this.redirectToPerfil = true;
  }
    
  }


  
}

