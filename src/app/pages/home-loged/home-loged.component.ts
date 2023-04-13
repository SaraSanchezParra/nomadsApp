import { Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-home-loged',
  templateUrl: './home-loged.component.html',
  styleUrls: ['./home-loged.component.css']
})
export class HomeLogedComponent implements OnInit {

  inputValue: string = '';

  public viajes: Viaje[];

  constructor(private viajesService: ViajesService) {

  }

  ngOnInit() {
    this.getViajesLog();
  }

  getViajesLog(): void {
    this.viajesService.getViajesLog().subscribe(viajes => {
      console.log(viajes);
      this.viajes = viajes

      console.log(this.viajes);
    });
  }

}
