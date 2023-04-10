import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public loged: boolean;
  public showHeader: boolean;
  menuActive=false;

  constructor(private router: Router, public location: Location) {
    this.loged = true;
    
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
