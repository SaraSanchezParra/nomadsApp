import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Day } from 'src/app/models/day';
import { PuntoDeInteres } from 'src/app/models/punto-de-interes';
import { AddViajeService } from 'src/app/services/add-viaje.service';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { ModifyViajeService } from 'src/app/services/modify-viaje.service';

@Component({
  selector: 'app-modificar-dia',
  templateUrl: './modificar-dia.component.html',
  styleUrls: ['./modificar-dia.component.css']
})
export class ModificarDiaComponent {
  dia: Day
  modDiaForm: FormGroup;
  counter: number;
  diaToMod: Day

  constructor(private fb: FormBuilder, public modViajeService: ModifyViajeService, private router: Router, public userService: DatosUsuarioService) {
    this.buildForm();
    this.counter=0;
    // this.dia = new Day([new PuntoDeInteres('https://i0.wp.com/residencialvistaalegre.com/wp-content/uploads/2019/03/playa-tortugas.jpg?fit=1200%2C831', 'Playa de las Tortugas')])
  }


  

  private buildForm() {
    this.modDiaForm = this.fb.group({
      'nombrePuntoDeInteres1': new FormControl(null, Validators.required),
      'fotoPuntoDeInteres1': new FormControl(null, Validators.required),
      'nombrePuntoDeInteres2': new FormControl(null,),
      'fotoPuntoDeInteres2': new FormControl(null,),
      'nombrePuntoDeInteres3': new FormControl(null,),
      'fotoPuntoDeInteres3': new FormControl(null,),
      'nombrePuntoDeInteres4': new FormControl(null,),
      'fotoPuntoDeInteres4': new FormControl(null,),
      'nombrePuntoDeInteres5': new FormControl(null,),
      'fotoPuntoDeInteres5': new FormControl(null,)
    })

    console.log(this.dia);
    
  }

  public addPI() {
    this.counter += 1;
  }

  public addDay() {
    // let formValue = this.modDiaForm.value;
    // let PI1 = new PuntoDeInteres(formValue.fotoPuntoDeInteres1, formValue.nombrePuntoDeInteres1)
    // let PI2 = new PuntoDeInteres(formValue.fotoPuntoDeInteres2, formValue.nombrePuntoDeInteres2)
    // let PI3 = new PuntoDeInteres(formValue.fotoPuntoDeInteres3, formValue.nombrePuntoDeInteres3)
    // let PI4 = new PuntoDeInteres(formValue.fotoPuntoDeInteres4, formValue.nombrePuntoDeInteres4)
    // let PI5 = new PuntoDeInteres(formValue.fotoPuntoDeInteres5, formValue.nombrePuntoDeInteres5)

    // let PIs = [PI1, PI2, PI3, PI4, PI5]
    // let dayToMod: Day = new Day([])
    // for (let PI of PIs){
    //   if (PI.img_url != null && PI.title != null){
    //     dayToMod.puntosDeInteres.push(PI)
    //   }
    // }
    // this.modViajeService.viajeAModificar.days.splice(0,1, dayToMod)
    // this.dayToAddService.viajeToAdd.days.push(dayToAdd);
    // console.log(this.dayToAddService.viajeToAdd);
    this.router.navigate(['/modificarViaje'])
  }
}
