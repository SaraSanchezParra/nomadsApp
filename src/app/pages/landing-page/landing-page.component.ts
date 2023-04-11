import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(private router: Router, private userService: DatosUsuarioService) { 
    

    setTimeout(() => {
    this.router.navigateByUrl('/home-no-loged');
    this.userService.showHeaderFooter = true;
    this.userService.loged = false;
  }, 3000);
 


}

  ngOnInit() {
     // redirige después de 3 segundos
  }


}

