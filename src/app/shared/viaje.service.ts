import { Injectable } from '@angular/core';
import { Viaje } from '../models/viaje';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  public viajes: Viaje[]
  public user: User;
  viajeDetalle_id: number;

  private url = "http://localhost:3000/"

  constructor( private http: HttpClient, public router: Router) {
  }

  public goToViaje(viaje_idCard: number) {
    this.viajeDetalle_id = viaje_idCard;
    this.router.navigate(["/paginaViaje"])
  }

  public getViaje(viaje_id: number) {
    let newUrl = `${this.url}viaje?viaje_id=${viaje_id}`;
    console.log(newUrl);
    return this.http.get(newUrl);
  }

  public getDay(day_id: number) {
    let newUrl = `${this.url}getPI?dia_id=${day_id}`
    console.log(this.http.get(newUrl));
    
    return this.http.get(newUrl)
  }

  public addViaje(viaje: Viaje) {
    console.log(viaje);
    return this.http.post(`${this.url}addViaje`, viaje)
  }

  public modViaje(viaje: Viaje) {
    return this.http.put(this.url+"modificarViaje", viaje)
  }

  public addLike(user_id: number, viaje_id: number) {
    return this.http.post(`${this.url}viaje`, {user_id: user_id, viaje_id: viaje_id})
  }

  public unLike(viaje_id: number, user_id: number) {
    // return this.http.delete(`${this.url}viaje`, {viaje_id_fav: viaje_id, user_id_fav: user_id})
  }
}
