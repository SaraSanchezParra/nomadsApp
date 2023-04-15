import { Component } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-viajes-destino',
  templateUrl: './viajes-destino.component.html',
  styleUrls: ['./viajes-destino.component.css']
})
export class ViajesDestinoComponent {

  viajesADestino: Viaje[]

  
  constructor(public viajesService:ViajesService) { 

    this.viajesADestino = this.viajesService.viajesBuscados
  }
}
