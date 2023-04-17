import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Day } from 'src/app/models/day';
import { Viaje } from 'src/app/models/viaje';
import { AddViajeService } from 'src/app/services/add-viaje.service';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { User } from '../../models/user';
import { ViajeService } from 'src/app/shared/viaje.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-add-viaje',
  templateUrl: './add-viaje.component.html',
  styleUrls: ['./add-viaje.component.css']
})
export class AddViajeComponent {

  public viaje: Viaje;
  public addForm: FormGroup;
  public user: User

  get days() {
    return this.addForm.get('days') as FormArray;
  }
  
  constructor(private formBuilder: FormBuilder, public viajeToAddService: AddViajeService, private router: Router, public viajeService: ViajeService, public userService: DatosUsuarioService) {
    this.buildForm()
    // this.viaje = this.viajeToAddService.viajeToAdd
    // this.user =this.userService.user
  }

  private buildForm() {
    this.addForm = this.formBuilder.group({
      nombreViaje: ['', Validators.required],
      lugarViaje: ['', Validators.required],
      descripcionViaje: ['', Validators.required],
      fotoViaje: ['', Validators.required],
      days: this.formBuilder.array([])
    })
  }



  public addViaje() {
    let formValue = this.addForm.value
    let viajeToAdd = new Viaje(null, formValue.nombreViaje, formValue.fotoViaje, formValue.descripcionViaje, [], 0, this.userService.user_logged.user_id)
    console.log(viajeToAdd);
    
    this.viajeService.addViaje(viajeToAdd).subscribe((answer: Respuesta) => {
      if (answer.mensaje != "0") {
        console.log("Viaje creado");
        this.router.navigate(["/paginaViaje"])
      }
    })
  }

  public addDays() {
    if (this.viaje.days.length != 0){
      this.router.navigate(['/add-dia'])
    }
    else {
      this.addViaje();
      this.router.navigate(['/add-dia'])
    }
  }

  // public submitViaje(){
  //   let formValue = this.addForm.value
  //   let viajeToAdd = new Viaje(formValue.nombreViaje, formValue.fotoViaje, formValue.descripcionViaje, [], 0)

  //   viajeToAdd.days = this.viaje.days
  //   this.user.misViajes.push(viajeToAdd)
  //   console.log(this.user);
  //   this.router.navigate(['/paginaViaje'])
  // }
  

  public eliminate(day_id: number) {
    this.viaje.days.splice(day_id, 1)
    // should actually work with index of day id not day id
  }
}
