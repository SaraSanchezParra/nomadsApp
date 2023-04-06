import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public loged:Boolean
  
 
  constructor(private router: Router,public location: Location){
    
    this.loged = true;
    
   }
  ngOnInit(): void {
    console.log(this.location.path())
   

  }
}

