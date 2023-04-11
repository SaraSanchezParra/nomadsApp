import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { User } from 'src/models/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: User
  

  constructor(private router: Router, private userService:DatosUsuarioService){
    this.user = new User()
  }

  entrar(){
    this.userService.loged = true;
    this.userService.showHeaderFooter = true;
    this.router.navigate(['/home-loged'])

  }

  onSubmit(form:NgForm){
    console.log(form.value)
    console.log(this.user)
  }
  registrateAqui() {
    this.router.navigate(['/register']);
  }
}
