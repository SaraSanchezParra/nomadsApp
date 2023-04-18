import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public user = new User ("","","","","","",[],[]);
  public myForm: FormGroup;
  public route: Router
  isFormValid: boolean = false;

  constructor(private formBuilder:FormBuilder,private router: Router,public userService:DatosUsuarioService){
    this.buildForm();
    this.route = router;
  }




  public register() {
    const user = this.myForm.value;
    console.log(user);
    this.userService.postRegister(user).subscribe(
            (resp: string) => {
        this.userService.user_noLoged = user;
        this.userService.user_noLoged.user_id = Number(resp);

        this.router.navigate(['/login']);


      }
    );
  }

    private buildForm(){
    const minPassLength = 8;
  
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(/^@/)]],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      photo: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(minPassLength)]],
      password2: ['', [Validators.required, this.checkPasswords]]
    });

    this.myForm.valueChanges.subscribe((data) => {
      this.isFormValid = this.myForm.valid;
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



