
import { Component } from '@angular/core';
import { Router} from '@angular/router';



@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.css']
})
export class OnBoardingComponent {
  
  currentPage = 0;

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
    const isLogged = sessionStorage.getItem('isLogged');
    if (isLogged === 'true') {
      this.router.navigate(['/home-logged']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  // goToHome() {
  //   const isLogged = sessionStorage.getItem('isLogged');
  //   if (isLogged === 'false') {
  //     this.router.navigate(['/home-logged']);
  //   } else {
  //     this.router.navigate(['/login']);
  //   }
  // }
  
  
}
