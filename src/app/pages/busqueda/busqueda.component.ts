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

  }






  onSubmit(form:NgForm) {
    // console.log(form.value)
    if (form.controls.usuario.valid) {
      this.router.navigate(['/perfil']);
    }
    else
    {
      this.router.navigate(['/viajesDestino']);
    }
    
  }


  
}

