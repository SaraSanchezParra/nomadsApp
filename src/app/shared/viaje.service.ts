import { Injectable } from '@angular/core';
import { Viaje } from '../models/viaje';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  public viajes: Viaje[]
  public user: User;

  private url = "http://localhost:3000/"

  constructor( private http: HttpClient) {
  }

  public getViaje(viaje_id: number) {
    let newUrl = `${this.url}viaje?viaje_id=${viaje_id}`;
    return this.http.get(newUrl);
  }

  public getDay(day_id: number) {
    let newUrl = `${this.url}?day_id=${day_id}`
    return this.http.get(newUrl)
  }
}
