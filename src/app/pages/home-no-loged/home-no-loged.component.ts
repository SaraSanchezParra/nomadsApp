import { Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ViajesService } from 'src/app/services/viajes.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-home-no-loged',
  templateUrl: './home-no-loged.component.html',
  styleUrls: ['./home-no-loged.component.css']
})
export class HomeNoLogedComponent implements OnInit {

  inputValue: string = '';

  public viajes: Viaje[];
  public ubicacion: Viaje;
  public dias: Viaje;

  constructor(private viajesService: ViajesService, private router: Router) {
    this.getTopViajes();

  }

  ngOnInit() {

  }

  getTopViajes(): void {
    this.viajesService.getTopViajes().subscribe(viajes => {

      this.viajes = viajes

      console.log(this.viajes);
    });
  }

  
  buscarViajes(ubicacion: string, dias: number) {
    console.log(ubicacion);
    console.log(dias);
    

    if (ubicacion!== '') {
      this.viajesService.viajesBusqueda(ubicacion, dias).subscribe((respuesta: Respuesta) => {

        console.log(respuesta);
        this.viajesService.viajesBuscados = respuesta.data_viaje;
   

        this.router.navigate(['/viajesDestino'], { queryParams: { ubicacion: ubicacion} });
      })
    }
  }
}




