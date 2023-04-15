import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ViajesService } from 'src/app/services/viajes.service';
import { Respuesta } from 'src/app/models/respuesta';




@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  public loged: Boolean
  public redirectToPerfil: Boolean
  public destinoEncontrado: Boolean
  public usuarioEncontrado: Boolean




  constructor(private router: Router, private toastr: ToastrService, public viajesService: ViajesService) {

    this.destinoEncontrado = false;
    this.usuarioEncontrado = false;

  }






  onSubmit(form: NgForm): void {
    // console.log(form.value)

    if (form.controls.usuario.valid) {
      this.router.navigate(['/perfil']);
    }
    else {
      this.viajesService.viajesBusqueda(String(form.controls['destino'].value), Number(form.controls['dias'].value)).subscribe((respuesta: Respuesta) => {


        console.log(respuesta);
        this.viajesService.viajesBuscados = respuesta.data_viaje;
        console.log(this.viajesService.viajesBuscados);
        
        if (respuesta.data_viaje.length === 0) {
          this.toastr.warning('No se encontró el destino');
        }
        else {
          this.router.navigate(['/viajesDestino']);
        }
      }) 
    }


    if (this.usuarioEncontrado) { this.toastr.warning('No se encontró el usuario') }


  }

}
