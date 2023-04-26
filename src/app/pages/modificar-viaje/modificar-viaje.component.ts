import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { Viaje } from 'src/app/models/viaje';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { ViajeService } from 'src/app/shared/viaje.service';

@Component({
  selector: 'app-modificar-viaje',
  templateUrl: './modificar-viaje.component.html',
  styleUrls: ['./modificar-viaje.component.css']
})
export class ModificarViajeComponent {

  public viaje: Viaje
  public modifyForm: FormGroup


  constructor(private fb: FormBuilder, public viajeService: ViajeService, private router: Router, private location: Location, public toastr: ToastrService, public userService: DatosUsuarioService) {
    this.viaje = this.viajeService.viajeMod
    console.log(this.viaje);
    
    this.modifyForm = this.fb.group({
      nombreViaje: [this.viaje.titulo, Validators.required],
      lugarViaje: [this.viaje.ubicacion,  Validators.required],
      descripcionViaje: [this.viaje.descripcion,  Validators.required],
      fotoViaje: [this.viaje.foto, Validators.required]
    })
  }

  public modify(){
    let modViaje = this.modifyForm.value;
    console.log(modViaje);
    let viajeEditado = new Viaje(this.viajeService.viajeMod.viaje_id, 
                                modViaje.nombreViaje, 
                                modViaje.lugarViaje, 
                                modViaje.fotoViaje,
                                modViaje.descripcionViaje,
                                this.viajeService.viajeMod.days,
                                this.viajeService.viajeMod.likes,
                                this.viaje.user_id_propietario,
                                null,
                                this.userService.user_logged.photo, this.viajeService.viajeMod.corLat, this.viajeService.viajeMod.corLong)
    console.log(viajeEditado);
    
    this.viajeService.modViaje(viajeEditado).subscribe((answer: Respuesta) => {
      if (answer.error) {
        console.log("Le aviso cordialmente de que el viaje no se editó satisfactoriamente, de hecho, no se editó del todo");
      }
      else {
        this.toastr.success("Su viaje se ha editado!")
        this.viajeService.viajeDetalle_id = this.viajeService.viajeMod.viaje_id
        this.router.navigate(["/paginaViaje"])
        let index = this.userService.user_logged.misViajes.findIndex(viaje => viaje.viaje_id == this.viajeService.viajeMod.viaje_id)
        this.userService.user_logged.misViajes.splice(index, 1, viajeEditado)
      }
    })
   
  }

  showOnMap(cardMessage) {
    if (cardMessage.isOpen) {
      console.log(cardMessage.isOpen);
    } else {
      console.log('is closed' + cardMessage.isOpen);
      console.log(cardMessage);
      this.viajeService.getDay(cardMessage.dia_id).subscribe(
        (answer: Respuesta) => {
          console.log(answer);
          this.viaje.days[cardMessage.index].puntosDeInteres = answer.data_dia;
          console.log(this.viaje);
        }
      );
    }
  }

  public eliminate(day_id: number) {
    console.log(day_id);
    if (this.viaje.days.length < 1) {
       this.viajeService.diaNo(day_id).subscribe((answer: Respuesta)=>{
      if (answer.error){
        console.log("Error al eliminar el día")
      }
      else{
        this.toastr.success("El día se ha eliminado.")
        this.viajeService.getViaje(this.viaje.viaje_id).subscribe((answer: Respuesta) => {
          if (answer.error) {
            this.toastr.warning("Unexpected")
          }
          else {
            this.viaje = answer.data_viaje[0]
          }
        })
      }

    })
    }
    else {
      this.viajeService.viajeNo(this.viaje.viaje_id).subscribe((answer: Respuesta) => {
        if (answer.mensaje == '0') {
          this.toastr.error("Viaje no borrado")
        }
        else {
          this.toastr.success("Tu viaje ha sido borrado")
          this.router.navigate(["/perfil"])
          let index = this.userService.user_logged.misViajes.findIndex(v => v.viaje_id == this.viaje.viaje_id)
          this.userService.user_logged.misViajes.splice(index, 1)
        //  let viajeBorradoI =  this.usuarioMostrado.misViajes.findIndex(v => v.viaje_id == i)
        //  this.usuarioMostrado.misViajes.splice(viajeBorradoI, 1)
        }
      })
    }
   
    
  }

  public back():void {
    this.location.back()
  }
}
