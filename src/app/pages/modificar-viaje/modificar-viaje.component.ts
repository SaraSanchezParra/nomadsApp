import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Day } from 'src/app/models/day';
import { PuntoDeInteres } from 'src/app/models/punto-de-interes';
import { Viaje } from 'src/app/models/viaje';

@Component({
  selector: 'app-modificar-viaje',
  templateUrl: './modificar-viaje.component.html',
  styleUrls: ['./modificar-viaje.component.css']
})
export class ModificarViajeComponent {

  public viaje: Viaje
  public modifyForm: FormGroup

  get days() {
    return this.modifyForm.get('days') as FormArray;
  }

  addDay() {
    this.viaje.days.push(new Day([]));
  }
  
  // addPI(i:number) {
  //   this.viaje.days[i].push(new PuntoDeInteres())
  // manera de anadir form controls y saquar los valores para anadirlos al dia en particular
  // }

  constructor(private fb: FormBuilder) {
    this.viaje = new Viaje('Madrid Centro', 'https://media.istockphoto.com/id/1059076792/es/foto/madrid-ciudad-skyline-gran-v%C3%ADa-calle-crep%C3%BAsculo-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=gWGpBRHVNJleHrVRmetRPTFuau_aahvCUKDMNfCrMNE=', 'El corazon de la capital', [new Day([new PuntoDeInteres('foto', 'place')])], 490)
    this.modifyForm = this.fb.group({
      nombreViaje: ['', ],
      descripcionViaje: ['', ],
      fotoViaje: ['', ],
      days: this.fb.array([])
    })
  }

  public modify(){
    let newViaje = this.modifyForm.value;
    console.log(newViaje);
    if (newViaje.nombreViaje != "") {
      this.viaje.title = newViaje.nombreViaje
    }
    if (newViaje.descripcionViaje != "") {
      this.viaje.description = newViaje.descripcionViaje
    }
    if (newViaje.fotoViaje != "") {
      this.viaje.main_img = newViaje.fotoViaje
    }
  }
}
