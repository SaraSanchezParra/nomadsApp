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

  constructor(private router: Router, public location: Location) {
    this.loged = true;
    console.log(this.loged);
    this.showHeader = true;
    if(this.location.path() === `/landin-page` || this.location.path() === `/login` ||
    this.location.path() === `/register`){
     this.showHeader = false
  }
  }
//   private showHeader(): boolean {
//     const currentUrl = this.router.url;
//     return !currentUrl.includes('/perfil') && !currentUrl.includes('/register') && !currentUrl.includes('/landin-page');
//   }
}
