import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: User;
  public isFormValid: boolean = false;
  

  constructor(private router: Router, private userService:DatosUsuarioService){

    this.user = new User("", "", "", "", "", "", [], []);
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

    this.userService.loged = true;
    this.userService.showHeaderFooter = true;

    this.router.navigate(['/home-loged'])
    
  }
  registrateAqui() {
    this.router.navigate(['/register']);
   }
}
