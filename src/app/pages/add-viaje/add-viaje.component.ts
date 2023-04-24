import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Day } from 'src/app/models/day';
import { Viaje } from 'src/app/models/viaje';
import { AddViajeService } from 'src/app/services/add-viaje.service';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { User } from '../../models/user';
import { ViajeService } from 'src/app/shared/viaje.service';
import { Respuesta } from 'src/app/models/respuesta';
import { AddDiaService } from 'src/app/services/add-dia.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private formBuilder: FormBuilder, public viajeToAddService: AddViajeService, private router: Router, public viajeService: ViajeService, public userService: DatosUsuarioService, public diaService: AddDiaService, public toastr: ToastrService) {
    this.buildForm()
    this.viaje = this.viajeToAddService.viajeToAdd
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
    const maxLength = 20
    this.addForm = this.formBuilder.group({
      nombreViaje: [this.viajeToAddService.viajeToAdd.titulo, [Validators.required, Validators.maxLength(maxLength)]],
      lugarViaje: [this.viajeToAddService.viajeToAdd.ubicacion, Validators.required],
      descripcionViaje: [this.viajeToAddService.viajeToAdd.descripcion, Validators.required, Validators.maxLength(maxLength)],
      fotoViaje: [this.viajeToAddService.viajeToAdd.foto, Validators.required]
    })
  }



  public addViaje() {
    if (this.viajeService.viajeAdd.days.length === 0) {
      this.toastr.warning("Necesitas añadir al menos un día")
    }
    else{
      this.toastr.success("¡Tu viaje se ha creado!")
    this.viajeService.viajeDetalle_id = this.viajeService.viajeAdd.viaje_id;
    this.addForm.reset()
    this.viajeService.viajeAdd = null
    this.router.navigate(["/paginaViaje"])
    }
    
  }

  public addDays() {
    if (this.viajeService.viajeAdd.days.length === 0) {
      let formValue = this.addForm.value
    console.log(formValue);
    console.log(formValue.lugarViaje);
    // n dias viaje
    let viajeToAdd = new Viaje(null, formValue.nombreViaje, formValue.lugarViaje, formValue.fotoViaje, formValue.descripcionViaje, this.diaService.dias, 0, this.userService.user_logged.user_id, this.userService.user_logged, this.userService.user_logged.photo)
    console.log(viajeToAdd);
    this.viajeService.viajeAdd = viajeToAdd
    this.viajeService.addViaje(viajeToAdd).subscribe((answer: Respuesta) => {
      if(answer.error) {
        this.toastr.error("No se genero su viaje")
      }
      else if (answer.mensaje != "0") {
        this.viajeToAddService.viajeToAdd.viaje_id = Number(answer.mensaje)
        this.toastr.success("¡Su viaje se ha generado!")
        console.log(answer);
        console.log(this.viajeToAddService.viajeToAdd.viaje_id);
        
        this.router.navigate(['/add-dia'])
      }
      else {
      this.toastr.success("Día añadido")
      this.router.navigate(["/add-dia"])
    }
    })
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
