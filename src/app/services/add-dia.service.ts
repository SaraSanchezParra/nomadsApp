import { Injectable } from '@angular/core';
import { Viaje } from '../models/viaje';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddDiaService {
  private url = "http://localhost:3000/addDia";
  private url2 = "http://localhost:3000/addPI"
  diaToAdd: Viaje
  
  constructor(private http: HttpClient) {
    // this.diaToAdd = new Viaje('', '', '', [], 0)
   }

   postDia(newDay :Viaje){
    console.log(newDay);
    
    return this.http.post(this.url, newDay)
   }

   postPI(newPI :Viaje){
    console.log(newPI);
    
    return this.http.post(this.url2, newPI)
   }


}