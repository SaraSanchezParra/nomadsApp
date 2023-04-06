import { Component } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';

@Component({
  selector: 'app-home-loged',
  templateUrl: './home-loged.component.html',
  styleUrls: ['./home-loged.component.css']
})
export class HomeLogedComponent {

  inputValue: string = '';
  
  public viaje: Viaje[];

  constructor() {

    this.viaje = [
      new Viaje('Madrid Centro', 'https://media.istockphoto.com/id/1059076792/es/foto/madrid-ciudad-skyline-gran-v%C3%ADa-calle-crep%C3%BAsculo-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=gWGpBRHVNJleHrVRmetRPTFuau_aahvCUKDMNfCrMNE=', 'El corazon de la capital', [], 490),
      new Viaje('Málaga Costa', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZOWEzyLzR19fys_Pvk3AIsWcXpmxZdcSfQ&usqp=CAU', 'Visita la costa del sol y nunca querrás irte.', [], 632),
      new Viaje('Sevilla', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpE7U8eEMWBvLEGpvY9HRIOr693Bih4e-tSg&usqp=CAU', 'Disfruta de su color y su encanto.', [], 356)
    ];
  }
}
