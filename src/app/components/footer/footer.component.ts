import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  constructor(private router: Router, public location : Location, public userService:DatosUsuarioService ){
  
  }
  resetPerfil() {
    if (this.userService.usuarioBuscado)
    {
      this.userService.usuarioBuscado = false;
      this.userService.usuarioMostrado = this.userService.user_logged;
    }
    else
    {
      this.router.navigate(['/perfil']);
    }  
  }
  

  ngOnInit(): void {
  }

}

