import { Injectable } from '@angular/core';
import { Viaje } from '../models/viaje';

@Injectable({
  providedIn: 'root'
})
export class AddViajeService {
  
  viajeToAdd: Viaje
  
  constructor() {
    // this.viajeToAdd = new Viaje('', '', '', [], 0)
   }
}
