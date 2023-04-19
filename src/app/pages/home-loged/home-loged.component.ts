import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Viaje } from 'src/app/models/viaje';
import { TopUserService } from 'src/app/services/topUser.service';
import { ViajesService } from 'src/app/services/viajes.service';
import { Router } from '@angular/router';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { Respuesta } from 'src/app/models/respuesta';
import { ViajeService } from 'src/app/shared/viaje.service';

@Component({
  selector: 'app-home-loged',
  templateUrl: './home-loged.component.html',
  styleUrls: ['./home-loged.component.css']
})
export class HomeLogedComponent implements OnInit {

  inputValue: string = '';

  public viajes: Viaje[];
  public users: User[];
  public usuarioBuscado: boolean = false;

  constructor(private viajesService: ViajesService, private topUserService: TopUserService, private router: Router, private datosUsuarioService: DatosUsuarioService, public viajeService: ViajeService) {
    this.viajesService.getTopViajesLog().subscribe(viajes => {
      console.log(viajes);
      this.viajes = viajes

      this.topUserService.getTopNomads().subscribe(users => {
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
    this.topUserService.getTopNomads().subscribe(users => {
      console.log(users);
      this.users = users

    });
  }
  userPerfil(username: string): void {
    console.log(username);
    this.datosUsuarioService.usuarioEncontrado(username).subscribe((respuesta:Respuesta)=>{

      console.log(respuesta.data_user);
          this.datosUsuarioService.usuarioBuscado = true;
          this.datosUsuarioService.user_noLoged = respuesta.data_user[0];
          this.router.navigate(['/perfil']);

    })
   
  }
  
  goToViaje(viaje_id: number) {
    this.viajeService.viajeDetalle_id = viaje_id
  }
}