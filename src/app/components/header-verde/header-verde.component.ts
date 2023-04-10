import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-verde',
  templateUrl: './header-verde.component.html',
  styleUrls: ['./header-verde.component.css']
})
export class HeaderVerdeComponent {
  public loged: boolean;
  public showHeader: boolean;
  menuActive=false;

  constructor(private router: Router, public location: Location) {
    this.loged = false;
    
    this.showHeader = true;
    if(this.location.path() === `/landin-page` || this.location.path() === `/login` ||
    this.location.path() === `/register`){
     this.showHeader = false
     this.loged = false
  }
}
toggleMenu() {
  this.menuActive = !this.menuActive;
}

activateMenu() {
  this.menuActive = true;
}

}

