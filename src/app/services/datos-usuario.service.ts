import { Injectable } from '@angular/core';
import { Viaje } from '../models/viaje';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {
  setUsuarioBuscado(selectedUser: User) {
    throw new Error('Method not implemented.');
  }
 private url: string = "http://localhost:3000/"
// private url: string = "https://nomads-api.vercel.app/"
 
 public user: User;
 public user_logged: User;
 public loged: boolean;
 public showHeaderFooter: boolean; 
 public usuarioBuscado: boolean
 
  constructor(private http:HttpClient) { 
      this.showHeaderFooter=false;
    }

          
    postRegister (user:User){
      return this.http.post(this.url + "registrar",user)
    }

    postLogin(user:User){
      return this.http.post(this.url + "login",user)
    }

    modificarUser(user:User){
      return this.http.put(this.url + "modificarPerfil", user)
    }

};

    


  
  


