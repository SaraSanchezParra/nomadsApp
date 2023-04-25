import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { Viaje } from 'src/app/models/viaje';
import { ViajeService } from 'src/app/shared/viaje.service';

@Component({
  selector: 'app-modificar-viaje',
  templateUrl: './modificar-viaje.component.html',
  styleUrls: ['./modificar-viaje.component.css']
})
export class ModificarViajeComponent {

  public viaje: Viaje
  public modifyForm: FormGroup


  constructor(private fb: FormBuilder, public viajeService: ViajeService, private router: Router, private location: Location, public toastr: ToastrService) {
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
                                null,
                                this.viaje.user_id_propietario,
                                null,
                                null, null, null)
    console.log(viajeEditado);
    
    this.viajeService.modViaje(viajeEditado).subscribe((answer: Respuesta) => {
      if (answer.error) {
        console.log("Le aviso cordialmente de que el viaje no se editó satisfactoriamente, de hecho, no se editó del todo");
      }
      else {
        this.toastr.success("Su viaje se ha editado!")
        this.viajeService.viajeDetalle_id = this.viajeService.viajeMod.viaje_id
        this.router.navigate(["/paginaViaje"])
      }
    })
   
  }

  // showOnMap(cardMessage) {
  //   if (cardMessage.isOpen) {
  //     console.log(cardMessage.isOpen);
  //   } else {
  //     console.log('is closed' + cardMessage.isOpen);
  //     console.log(cardMessage);
  //     this.viajeService.getDay(cardMessage.dia_id).subscribe(
  //       (answer: Respuesta) => {
  //         console.log(answer);
  //         this.viaje.days[cardMessage.index].puntosDeInteres = answer.data_dia;
  //         console.log(this.viaje);
  //       }
  //     );

  //     // como sacar el map de nginitview ?
  //   }
  // }

  public eliminate(day_id: number) {
    console.log(day_id);
    
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

  public back():void {
    this.location.back()
  }
}
