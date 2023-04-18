import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';
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

      this.userService.postLogin(this.user).subscribe((res: Respuesta) => {
        if (res.mensaje === "logeado") {
          this.userService.loged = true;
          this.userService.user_logged = res.data_user;
          console.log("logged user data:");
          console.log(res.data_user);
    
          this.userService.loged = true;
          this.userService.showHeaderFooter = true;
    
          this.router.navigate(['/home-loged']);
        } else {
          this.userService.loged = false;
        }
      });


    }
    else{
      this.isFormValid = false;
    }
   
  }
  
  registrateAqui() {
    this.router.navigate(['/register']);
  }
}
