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
  

  constructor(private router: Router){
    this.user = new User()
  }

  entrar(){

    this.router.navigate(['/perfil'])

  }

  onSubmit(form:NgForm){
    console.log(form.value)
    console.log(this.user)
  }
  registrateAqui() {
    this.router.navigate(['/register']);
  }
}
