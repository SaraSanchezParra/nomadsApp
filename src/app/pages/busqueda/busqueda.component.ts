import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  public loged:Boolean
 
  

  constructor(private router: Router) { 

    this.loged = false
    
    
  }

  navigateToRegister() {
    this.router.navigate(['/login']);
  }
  navigateToPagViaje() {
    this.router.navigate(['/paginaViaje']);
  }
}
