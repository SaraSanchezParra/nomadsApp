import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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


  constructor(private fb: FormBuilder, public viajeService: ViajeService, private router: Router, private location: Location) {
    this.viaje = this.viajeService.viajes[0]
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
    let viajeEditado = new Viaje(this.viajeService.viajeDetalle_id, modViaje.titulo==""? null: modViaje.titulo, 
                                modViaje.ubicacion==""? null: modViaje.ubicacion, 
                                modViaje.foto==""? null: modViaje.foto,
                                modViaje.descripcion==""? null: modViaje.descripcion,
                                null,
                                null,
                                this.viaje.user_id_propietario,
                                null,
                                null)
    this.viajeService.modViaje(viajeEditado).subscribe((answer: Respuesta) => {
      if (answer.error) {
        console.log("Le aviso cordialmente de que el viaje no se editó satisfactoriamente, de hecho, no se editó del todo");
      }
      else {
        console.log("¡Yay, se editó!");
        // aqui iria el editar mod PI´s
      }
    })
    this.router.navigate(['/paginaViaje'])
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

      // como sacar el map de nginitview ?
    }
  }

  public eliminate(day_id: number) {
    this.viaje.days.splice(day_id, 1)
  }

  public back():void {
    this.location.back()
  }
}
