import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
 
  constructor(private router: Router, public location : Location, public userService:DatosUsuarioService ){
  
  }
   
  ngOnInit(): void {
  }

}

