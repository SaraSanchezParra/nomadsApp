import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from 'src/app/models/viaje';
import { ViajesService } from 'src/app/services/viajes.service';
import { ViajeService } from 'src/app/shared/viaje.service';


@Component({
  selector: 'app-viajes-destino',
  templateUrl: './viajes-destino.component.html',
  styleUrls: ['./viajes-destino.component.css']
})
export class ViajesDestinoComponent {

  viajesADestino: Viaje[]
  
  constructor(public viajesService:ViajesService, public viajeService: ViajeService, public router: Router) { 

    this.viajesADestino = this.viajesService.viajesBuscados
   
  }
 
  goToViaje(viaje_idCard: number) {
    this.viajeService.viajeDetalle_id = viaje_idCard;
    this.router.navigate(["/paginaViaje"])
  }

}
