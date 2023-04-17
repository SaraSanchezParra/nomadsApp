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
import { AddDiaService } from 'src/app/services/add-dia.service';

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
  
  constructor(private formBuilder: FormBuilder, public viajeToAddService: AddViajeService, private router: Router, public viajeService: ViajeService, public userService: DatosUsuarioService, public diaService: AddDiaService) {
    this.buildForm()
    this.viaje = this.viajeToAddService.viajeToAdd
    this.diaService.getViajeID().subscribe((answer: Respuesta) => {
      if (!answer.error) {
        console.log(answer);
        this.viaje.viaje_Id = Number(answer.mensaje) + 1
        console.log(this.viaje.viaje_Id);
        this.diaService.viajeAInsertar_id = this.viaje.viaje_Id
      }
    })
    
    
    if (this.diaService.dias != undefined) {
      this.viaje.days = this.diaService.dias
    }
    else {
      this.viaje.days = []
    }
    
    // this.viaje = this.viajeToAddService.viajeToAdd
    // this.user =this.userService.user
  }

  private buildForm() {
    this.addForm = this.formBuilder.group({
      nombreViaje: [this.viajeToAddService.viajeToAdd.titulo, Validators.required],
      lugarViaje: [this.viajeToAddService.viajeToAdd.ubicacion, Validators.required],
      descripcionViaje: [this.viajeToAddService.viajeToAdd.descripcion, Validators.required],
      fotoViaje: [this.viajeToAddService.viajeToAdd.foto, Validators.required],
      days: this.formBuilder.array([])
    })
  }



  public addViaje() {
    let formValue = this.addForm.value
    let viajeToAdd = new Viaje(null, formValue.nombreViaje, formValue.lugarViaje, formValue.fotoViaje, formValue.descripcionViaje, [], 0, this.userService.user_logged.user_id, this.userService.user_logged, this.userService.user_logged.photo)
    console.log(viajeToAdd);
    
    this.viajeService.addViaje(viajeToAdd).subscribe((answer: Respuesta) => {
      if (answer.mensaje != "0") {
        console.log("Viaje creado");
        this.diaService.dias.forEach((diaToAdd) => {
          this.diaService.postDia(diaToAdd).subscribe((answer: Respuesta) => {
            if (answer.error) {
              console.log(answer.error);
            }
            else if (answer.data_dia != null) {
              console.log("success");
            }
          })
        })
        // this.router.navigate(["/paginaViaje"])
      }
    })
  }

  public addDays() {
    if (this.viajeToAddService.viajeToAdd.titulo != '') {
      this.router.navigate(['/add-dia'])
    }
    else {
      let formValue = this.addForm.value
      this.viajeToAddService.viajeToAdd.titulo = formValue.nombreViaje
      this.viajeToAddService.viajeToAdd.ubicacion = formValue.lugarViaje
      this.viajeToAddService.viajeToAdd.descripcion = formValue.descripcionViaje
      this.viajeToAddService.viajeToAdd.foto = formValue.fotoViaje
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
