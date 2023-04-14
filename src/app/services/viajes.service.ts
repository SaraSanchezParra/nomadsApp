import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Viaje } from 'src/app/models/viaje';


@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  private apiUrl = "http://localhost:3000/topViajes";
  private apiUrl2 = "http://localhost:3000/topViajesLog";


  constructor(private http: HttpClient) { }

  getTopViajes(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(this.apiUrl);
  }


  getTopViajesLog(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(this.apiUrl2);
  }

}

