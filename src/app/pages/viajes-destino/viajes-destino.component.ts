import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from 'src/app/models/viaje';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { ViajesService } from 'src/app/services/viajes.service';
import { ViajeService } from 'src/app/shared/viaje.service';


@Component({
  selector: 'app-viajes-destino',
  templateUrl: './viajes-destino.component.html',
  styleUrls: ['./viajes-destino.component.css']
})
export class ViajesDestinoComponent {

  viajesADestino: Viaje[]
  
  constructor(public viajesService:ViajesService, public viajeService: ViajeService, public router: Router, public userService:DatosUsuarioService) { 

    this.viajesADestino = this.viajesService.viajesBuscados
   
  }

  clickCard(viaje_id: number) {
    if(this.userService.loged)
    this.viajeService.goToViaje(viaje_id)
    else{
      this.userService.showHeaderFooter = false
      this.router.navigate(["/login"])

    }
  }
}
