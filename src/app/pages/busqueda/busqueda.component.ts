import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  public loged:Boolean
  public redirectToPerfil:Boolean
  public destinoEncontrado:Boolean
  public usuarioEncontrado:Boolean

 
  

  constructor(private router: Router, private toastr: ToastrService) { 

    this.destinoEncontrado =false;
    this.usuarioEncontrado =false;
  }






  onSubmit(form:NgForm): void {
    // console.log(form.value)
    if (form.controls.usuario.valid) {
      this.router.navigate(['/perfil']);
    }
    else
    {
      this.router.navigate(['/viajesDestino']);
    }

    if (this.destinoEncontrado) {
      this.toastr.warning('No se encontró el destino');
      return;
  }
    if (this.usuarioEncontrado) {
      this.toastr.warning('No se encontró el usuario');
      return;
  }
    
  }


  
}

