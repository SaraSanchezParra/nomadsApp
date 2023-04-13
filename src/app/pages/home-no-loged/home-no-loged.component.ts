import { Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-home-no-loged',
  templateUrl: './home-no-loged.component.html',
  styleUrls: ['./home-no-loged.component.css']
})
export class HomeNoLogedComponent implements OnInit {

  inputValue: string = '';

  public viajes: Viaje[];

  constructor(private viajesService: ViajesService) {

  }

  ngOnInit() {
    this.getViajes();
  }

  getViajes(): void {
    this.viajesService.getViajes().subscribe(viajes => {
      console.log(viajes);
      this.viajes = viajes
    
      console.log(this.viajes);
    });
  }

}




