import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Viaje } from 'src/app/models/viaje';
import { TopUserService } from 'src/app/services/topUser.service';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-home-loged',
  templateUrl: './home-loged.component.html',
  styleUrls: ['./home-loged.component.css']
})
export class HomeLogedComponent implements OnInit {

  inputValue: string = '';

  public viajes: Viaje[];
  public users: User[];

  constructor(private viajesService: ViajesService, private topUserServie: TopUserService) {
    this.viajesService.getTopViajesLog().subscribe(viajes => {
      console.log(viajes);
      this.viajes = viajes

      this.topUserServie.getTopNomads().subscribe(users => {
        console.log(users);
        this.users = users
  
        // console.log(this.users[0].photo);
      });
    }

      // console.log(this.viajes);
    );
  }

  ngOnInit() {
  }

  getTopViajesLog(): void {
    this.viajesService.getTopViajesLog().subscribe(viajes => {
      console.log(viajes);
      this.viajes = viajes

      // console.log(this.viajes);
    });
  }
         
  getTopNomads(): void {
    this.topUserServie.getTopNomads().subscribe(users => {
      console.log(users);
      this.users = users

      console.log(this.users[0].photo);
    });
  }

}
