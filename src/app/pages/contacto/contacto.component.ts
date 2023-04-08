import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  public myForm: FormGroup;


  constructor(private formBuilder:FormBuilder){
    this.buildForm()
  }


  private buildForm(){
   
  
    this.myForm = this.formBuilder.group({

      nombre: ['', Validators.required],
      asunto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
     
     
    });
  }
  
}
