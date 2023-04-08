import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public loged:Boolean;
  public showFooter: Boolean = true;
  
 
  constructor(private router: Router,public location: Location ){
    
    this.loged = true;
    this.showFooter = true;
    if(this.location.path() === `/landin-page` || this.location.path() === `/login` ||
       this.location.path() === `/register`){
        this.showFooter = false
    
   }
  }
   
  ngOnInit(): void {
    console.log(this.location.path())
   

  }

}

