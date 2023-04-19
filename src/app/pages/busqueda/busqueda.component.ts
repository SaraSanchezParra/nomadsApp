import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ViajesService } from 'src/app/services/viajes.service';
import { Respuesta } from 'src/app/models/respuesta';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';




@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  public loged: Boolean
  public redirectToPerfil: Boolean
  





  constructor(private router: Router, private toastr: ToastrService, 
              public viajesService: ViajesService, public userService:DatosUsuarioService) {

  

  }


  onSubmit(form: NgForm): void {
    // console.log(form.value)

    if (form.controls.usuario.valid) {
      this.userService.usuarioEncontrado(String(form.controls['usuario'].value)).subscribe
                                        ((respuesta:Respuesta)=>{
      
        console.log(respuesta);
        this.userService.users = respuesta.data_users;
     
      if(respuesta.error){
        this.toastr.warning(`No se ha encontrado a ${form.controls['usuario'].value}`);
      }
      else {

      this.userService.user_noLoged = respuesta.data_user[0]
      this.userService.usuarioBuscado = true;
        this.router.navigate(['/perfil']);
       

      }
    
      })
  

    }
    else {
      this.viajesService.viajesBusqueda(String(form.controls['destino'].value), Number(form.controls['dias'].value)).subscribe((respuesta: Respuesta) => {

        console.log(respuesta);
        this.viajesService.viajesBuscados = respuesta.data_viaje;
        console.log(this.viajesService.viajesBuscados);
        
        if (respuesta.data_viaje.length === 0) {
          this.toastr.warning('No hay coincidencias');
        }
        else {
          this.router.navigate(['/viajesDestino']);
        }
      }) 
    }
 }


  
}

