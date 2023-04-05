import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public loged : Boolean;

  constructor(){

    this.loged = true;
    console.log(this.loged);
    
  }
}
