import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: User
  isFormValid: boolean = false;
  

  constructor(private router: Router){
    this.user = new User()
  }

  entrar(){

    this.router.navigate(['/home-loged'])

  }

  onSubmit(form:NgForm){
    console.log(form.value)
    console.log(this.user)
    if(form.valid){
      this.isFormValid = true;
    }
    else{
      this.isFormValid = false;
    }
    
  }
  registrateAqui() {
    this.router.navigate(['/register']);
  }
}
