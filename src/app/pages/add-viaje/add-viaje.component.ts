import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
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

  get days() {
    return this.addForm.get('days') as FormArray;
  }

  addDay() {
    this.days.push(this.formBuilder.control(''));
  }

  constructor(private formBuilder: FormBuilder) {
    this.buildForm()
  }

  private buildForm() {
    this.addForm = this.formBuilder.group({
      nombreViaje: ['', Validators.required],
      descripcionViaje: ['', Validators.required],
      fotoViaje: ['', Validators.required],
      days: this.formBuilder.array([])
    })
  }
}
