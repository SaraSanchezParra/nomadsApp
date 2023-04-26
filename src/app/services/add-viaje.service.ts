import { Injectable } from '@angular/core';
import { Viaje } from '../models/viaje';

@Injectable({
  providedIn: 'root'
})
export class AddViajeService {
  
  viajeToAdd: Viaje
  viajeAddID: number
  
  constructor() {
    this.viajeToAdd = new Viaje(null, '', '', '', '', [], 0, null, null, "", null, null)
   }
}
