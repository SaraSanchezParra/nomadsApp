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


  constructor(private fb: FormBuilder, public modifyViajeService: ModifyViajeService, private router: Router) {
    this.viaje = new Viaje('Aruba', 'http://blog.gogo-vacations.com/wp-content/uploads/2016/01/XAN_14_001-1.jpg', 'Las playas del Caribe', [new Day([new PuntoDeInteres('https://i0.wp.com/residencialvistaalegre.com/wp-content/uploads/2019/03/playa-tortugas.jpg?fit=1200%2C831','Playa de las Tortugas')])], 2)

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
      this.viaje.title = modViaje.nombreViaje
    }
    if (modViaje.descripcionViaje != "") {
      this.viaje.description = modViaje.descripcionViaje
    }
    if (modViaje.fotoViaje != "") {
      this.viaje.main_img = modViaje.fotoViaje
    }
  }
}
