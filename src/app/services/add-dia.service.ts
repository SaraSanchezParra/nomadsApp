import { Injectable } from '@angular/core';
import { Viaje } from '../models/viaje';

@Injectable({
  providedIn: 'root'
})
export class AddDiaService {
  
  diaToAdd: Viaje
  
  constructor() {
    this.diaToAdd = new Viaje('', '', '', [], 0)
   }
}