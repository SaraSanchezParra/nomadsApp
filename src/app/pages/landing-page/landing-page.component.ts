import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/home-no-loged');
    }, 3000); // redirige después de 3 segundos
  }

}

