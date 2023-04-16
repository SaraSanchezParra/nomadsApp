import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Viaje } from 'src/app/models/viaje';


@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  selectedViaje: Viaje;
  // viajesBuscados: Viaje[];
 public viajesBuscados: Viaje []
private apiUrl = "http://localhost:3000/viajesDestino";
// private apiUrl = "https://nomads-api.vercel.app/"
private apiUrl1 = "http://localhost:3000/topViajes";
private apiUrl2 = "http://localhost:3000/topViajesLog";
//  private apiUrl = "http://localhost:3000/viajes";
//  private apiUrl: string = "https://nomads-api.vercel.app/viajes";
//  private apiUrl1 = "https://nomads-api.vercel.app/topViajes";
//  private apiUrl2 = "https://nomads-api.vercel.app/topViajesLog";


 constructor(private http: HttpClient) { }
 
 getViajes(): Observable<Viaje[]> {
   return this.http.get<Viaje[]>(this.apiUrl);
   
 }

 getTopViajes(): Observable<Viaje[]> {
  return this.http.get<Viaje[]>(this.apiUrl1);
}


getTopViajesLog(): Observable<Viaje[]> {
  return this.http.get<Viaje[]>(this.apiUrl2);
}



viajesBusqueda(ubicacion:string, dias:number){
  
 // let url = `https://nomads-api.vercel.app/viajesDestino?ubicacion=${ubicacion}&ndiasViaje=${dias}`
  let url = `http://localhost:3000/viajesDestino?ubicacion=${ubicacion}&ndiasViaje=${dias}`

  return this.http.get(url)
}


 
}

