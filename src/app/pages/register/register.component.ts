import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public user = new User;
  public myForm: FormGroup;
  public route: Router

  constructor(private formBuilder:FormBuilder,private router: Router){
    this.buildForm()
  }

  public register(){
    const user = this.myForm.value;
    console.log(user);
    this.router.navigate(['/login'])
  }

  private buildForm(){
    const minPassLength = 8;
  
    this.myForm = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required, Validators.pattern(/^@/)]],
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      foto: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(minPassLength)]],
      password2: ['', [Validators.required, this.checkPasswords]]
    });
  }
  

  private checkPasswords(control: AbstractControl)
  {
    let resultado = {matchPassword: true};

    // console.log(control.parent);
    // console.log(control.parent?.value);
    // console.log(control);


    if (control.parent?.value.password == control.value)
      resultado = null;

    return resultado;
  }

}



