import { Component } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-no-loged',
  templateUrl: './home-no-loged.component.html',
  styleUrls: ['./home-no-loged.component.css']
})
export class HomeNoLogedComponent {

  inputValue: string = '';

  public viajes: Viaje[];

  constructor(private router: Router, private route: ActivatedRoute) {

    this.viajes = [
      new Viaje('Madrid Centro', 'https://media.istockphoto.com/id/1059076792/es/foto/madrid-ciudad-skyline-gran-v%C3%ADa-calle-crep%C3%BAsculo-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=gWGpBRHVNJleHrVRmetRPTFuau_aahvCUKDMNfCrMNE=', 'El corazon de la capital', [], 490),
      new Viaje('Málaga Costa', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKtus2s69K5sGyRDm6e_ybvjZBOBkaM2cOw&usqp=CAU', 'Visita la costa del sol y nunca querrás irte.', [], 632),
      new Viaje('Sevilla', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpE7U8eEMWBvLEGpvY9HRIOr693Bih4e-tSg&usqp=CAU', 'Disfruta de su color y su encanto.', [], 356)
    ];


  }
 destino(): void {
    this.router.navigate(['/viajesDestino']);
  }

}



