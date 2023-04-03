import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: User
  

  constructor(){
    this.user = new User()
  }

  onSubmit(form:NgForm){
    console.log(form.value)
    console.log(this.user)
  }

}
