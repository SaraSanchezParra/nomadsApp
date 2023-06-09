import { Injectable } from '@angular/core';
import { Viaje } from '../models/viaje';
import { HttpClient } from '@angular/common/http';
import { Day } from '../models/day';
import { PuntoDeInteres } from '../models/punto-de-interes';
import { ViajeService } from '../shared/viaje.service';

@Injectable({
  providedIn: 'root'
})
export class AddDiaService {
  // private urlViaje = "http://localhost:3000/addViaje"
  // private url = "http://localhost:3000/addDia";
  // private url2 = "http://localhost:3000/addPI";
  private url = "https://nomads-api.vercel.app/addDia";
  private url2 = "https://nomads-api.vercel.app/addPI";
  private urlViaje = "https://nomads-api.vercel.app/addViaje";
  
  diaToAdd: Viaje
  viajeAInsertar_id: number
  dias: Day[]
  
  constructor(private http: HttpClient, public viajeService: ViajeService) {
    // this.diaToAdd = new Viaje(0,'', '', '', [], 0)
    this.dias = []
   }

   getViajeID() {
    return this.http.get(this.urlViaje)
   }

   postDia(newDay : Day){
    console.log(newDay);
    
    return this.http.post(this.url, newDay)
   }

   postPI(newPI : PuntoDeInteres){
    console.log(newPI);
    
    return this.http.post(this.url2, newPI)
   }


}