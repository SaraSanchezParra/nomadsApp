import { Component } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';

@Component({
  selector: 'app-viajes-destino',
  templateUrl: './viajes-destino.component.html',
  styleUrls: ['./viajes-destino.component.css']
})
export class ViajesDestinoComponent {

  viajesADestino: Viaje[] = [new Viaje('Madrid Centro', 'https://media.istockphoto.com/id/1059076792/es/foto/madrid-ciudad-skyline-gran-v%C3%ADa-calle-crep%C3%BAsculo-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=gWGpBRHVNJleHrVRmetRPTFuau_aahvCUKDMNfCrMNE=', 'El corazon de la capital.', [], 490),
  new Viaje('Madrid Norte', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE07JdmjaYsYO7AtgJAZZjgALXhpB0FGQa3Q&usqp=CAU', 'Madrid turistico.', [], 190),
  new Viaje('Madrid Sierra', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmP9nrpDJQP3PYLXUN7c0dvJDod2rutAbpw&usqp=CAU', 'Disfruta de la naturaleza en las afueras de Madrid.', [], 190),
  new Viaje('Madrid Divertido', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFR3S-MvP4lxreLG6dorNvNYAT9CVWb-6Mw&usqp=CAU', 'Pasarás un dia de aventuras.', [], 190),
  new Viaje('Madrid Cultural', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJhKvBdXNk-ngNbClmtowH--lFT3CGd9hdw&usqp=CAU', 'Los mejores museos a tu disposicion.', [], 190)]

  
  constructor() { }
}
