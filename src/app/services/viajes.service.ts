import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Viaje } from 'src/app/models/viaje';


@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  private apiUrl = "http://localhost:3000/viajes";
  private apiUrl2 = "http://localhost:3000/viajesLog";


  constructor(private http: HttpClient) { }

  getViajes(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(this.apiUrl);
  }


  getViajesLog(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(this.apiUrl2);
  }

}
