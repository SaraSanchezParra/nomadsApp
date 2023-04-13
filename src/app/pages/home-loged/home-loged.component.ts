import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Viaje } from 'src/app/models/viaje';
import { TopUserService } from 'src/app/services/topuser.service';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-home-loged',
  templateUrl: './home-loged.component.html',
  styleUrls: ['./home-loged.component.css']
})
export class HomeLogedComponent implements OnInit {

  inputValue: string = '';

  public viajes: Viaje[];
  public user: User[];

  constructor(private viajesService: ViajesService, private topUserServie: TopUserService) {

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

  getTopNomads(): void {
    this.topUserServie.getTopNomads().subscribe(user => {
      console.log(user);
      this.user = user

      console.log(this.user);
    });
  }

}
