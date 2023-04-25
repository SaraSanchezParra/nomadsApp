import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url: string = "http://localhost:3000/"
  // private url: string = "https://nomads-api.vercel.app"

  public logueado: boolean
  public user : User

  constructor(private http:HttpClient) { 
    this.logueado= false
  }
  postRegister (user:User){
    return this.http.post(this.url + "registrar",user)
  }
}
