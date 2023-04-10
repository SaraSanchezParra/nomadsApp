
import { Component } from '@angular/core';
import { Router} from '@angular/router';



@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.css']
})
export class OnBoardingComponent {
  
  currentPage = 0;
  public showButtons =true;
  public isLogged = true;

  constructor(private router: Router) {}



  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  goToNextPage(): void {
    if (this.currentPage < 5) {
      this.currentPage++;
      console.log("Página actual: ", this.currentPage);
    }
  }

   
    goToHome() {
      if (this.isLogged) {
        this.router.navigate(['/home-loged']);
      } else {
        this.router.navigate(['/home-no-loged']);
      }
  
   }
  
  
  
}
