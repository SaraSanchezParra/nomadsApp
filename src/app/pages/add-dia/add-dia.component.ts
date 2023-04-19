import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddViajeComponent } from '../add-viaje/add-viaje.component';
import { AddViajeService } from 'src/app/services/add-viaje.service';
import { PuntoDeInteres } from 'src/app/models/punto-de-interes';
import { Day } from 'src/app/models/day';
import { Route, Router } from '@angular/router';
import { AddDiaService } from 'src/app/services/add-dia.service';
import { Respuesta } from 'src/app/models/respuesta';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-dia',
  templateUrl: './add-dia.component.html',
  styleUrls: ['./add-dia.component.css']
})
export class AddDiaComponent {

  addDiaForm: FormGroup;
  counter: number;
  viaje_id :number;
  dia_index: number

  constructor(private fb: FormBuilder, public dayToAddService: AddViajeService, private router: Router, public servicioDia: AddDiaService, public toastr: ToastrService) {
    this.buildForm();
    this.counter=0;
    this.viaje_id = this.servicioDia.viajeAInsertar_id
    console.log(this.viaje_id);
    this.dia_index = this.dayToAddService.viajeToAdd.days.length + 1
    
  }

  private buildForm() {
    this.addDiaForm = this.fb.group({
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
  }

  public addPI() {
    this.counter += 1;
  }

  public addDay() {
    let formValue = this.addDiaForm.value;
    let PI1 = new PuntoDeInteres(null, formValue.fotoPuntoDeInteres1, formValue.nombrePuntoDeInteres1, null, null)
    let PI2 = new PuntoDeInteres(null, formValue.fotoPuntoDeInteres2, formValue.nombrePuntoDeInteres2, null, null)
    let PI3 = new PuntoDeInteres(null, formValue.fotoPuntoDeInteres3, formValue.nombrePuntoDeInteres3, null, null)
    let PI4 = new PuntoDeInteres(null, formValue.fotoPuntoDeInteres4, formValue.nombrePuntoDeInteres4, null, null)
    let PI5 = new PuntoDeInteres(null, formValue.fotoPuntoDeInteres5, formValue.nombrePuntoDeInteres5, null, null)

    let PIs = [PI1, PI2, PI3, PI4, PI5]
    let dayToAdd: Day = new Day(null, null, `Dia ${this.dia_index}`, [])
    for (let PI of PIs){
      if (PI.foto != null && PI.nombre != null){
        dayToAdd.puntosDeInteres.push(PI)
      }
    }

    // add day subscribe
    // dayToAdd.viaje_id = this.viaje_id
    // this.servicioDia.dias.push(dayToAdd)
    // this.servicioDia.postDia(dayToAdd).subscribe((answer: Respuesta) => {
    //   if (answer.error) {
    //     this.toastr.warning("Día no añadido")
    //   }
    //   else if (answer.data_dia != null) {
        
    //   }
    // })

    dayToAdd.puntosDeInteres.forEach((punto) => {
      this.servicioDia.postPI(punto).subscribe((answer: Respuesta) => {
        if (answer.error) {
          this.toastr.warning("Punto de interés no añadido")
        }
        else {
          if (answer.mensaje != "-1") {
            this.toastr.success("Punto de interés añadido")
          }
        }
      })
    })
    this.router.navigate(["/add-viaje"])
}
}