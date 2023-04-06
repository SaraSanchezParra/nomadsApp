import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Day } from 'src/app/models/day';
import { Viaje } from 'src/app/models/viaje';

@Component({
  selector: 'app-add-viaje',
  templateUrl: './add-viaje.component.html',
  styleUrls: ['./add-viaje.component.css']
})
export class AddViajeComponent {

  public viaje: Viaje;
  public addForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm()
  }

  private buildForm() {
    this.addForm = this.formBuilder.group({
      nombreViaje: ['', Validators.required],
      descripcionViaje: ['', Validators.required],
      fotoViaje: ['', Validators.required]
    })
  }
}
