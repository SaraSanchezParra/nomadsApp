import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Day } from 'src/app/models/day';
import { PuntoDeInteres } from 'src/app/models/punto-de-interes';
import { Viaje } from 'src/app/models/viaje';
import { ModifyViajeService } from 'src/app/services/modify-viaje.service';

@Component({
  selector: 'app-modificar-viaje',
  templateUrl: './modificar-viaje.component.html',
  styleUrls: ['./modificar-viaje.component.css']
})
export class ModificarViajeComponent {

  public viaje: Viaje
  public modifyForm: FormGroup


  constructor(private fb: FormBuilder, public modifyViajeService: ModifyViajeService, private router: Router, private location: Location) {

    this.modifyForm = this.fb.group({
      nombreViaje: ['', Validators.required],
      descripcionViaje: ['',  Validators.required],
      fotoViaje: ['', Validators.required]
    })
  }

  public modify(){
    let modViaje = this.modifyForm.value;
    console.log(modViaje);
    if (modViaje.nombreViaje != "") {
      this.viaje.titulo = modViaje.nombreViaje
    }
    if (modViaje.descripcionViaje != "") {
      this.viaje.descripcion = modViaje.descripcionViaje
    }
    if (modViaje.fotoViaje != "") {
      this.viaje.foto = modViaje.fotoViaje
    }
    this.router.navigate(['/paginaViaje'])
  }

  public eliminate(day_id: number) {
    this.viaje.days.splice(day_id, 1)
  }

  public back():void {
    this.location.back()
  }
}
