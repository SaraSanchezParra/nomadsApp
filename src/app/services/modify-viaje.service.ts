import { Injectable } from '@angular/core';
import { Viaje } from '../models/viaje';

@Injectable({
  providedIn: 'root'
})
export class ModifyViajeService {

  public viaje_id:number;
  public viajeAModificar: Viaje
  
  constructor() { }
}
