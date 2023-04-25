import { Injectable } from '@angular/core';
import { Viaje } from '../models/viaje';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {
  public users: User[];

 private url: string = "http://localhost:3000/"
// private url: string = "https://nomads-api.vercel.app/"
 
 public user_noLoged: User;
 public user_logged: User;
 public loged: boolean;
 public showHeaderFooter: boolean; 
 public usuarioBuscado: boolean
 public usuarioMostrado: User;


 
  constructor(private http:HttpClient) { 
      this.showHeaderFooter=false;
    }

          
    postRegister (user_noLoged:User){
      return this.http.post(this.url + "registrar",user_noLoged)
    }

    postLogin(user_noLoged:User){
      return this.http.post(this.url + "login",user_noLoged)
    }

    modificarUser(user_noLoged:User){
      console.log(user_noLoged.descripcion)
      return this.http.put(this.url + "user?user_id=" + user_noLoged.user_id, user_noLoged)
      
    }


    usuarioEncontrado(username:string){
      let url =`http://localhost:3000/userFound?username=${username}`
     
      return this.http.get(url)
    }

    getUserByID(user_id: number) {
      let url = "http://localhost:3000/user"
      return this.http.get(url)
    }


};

    


  
  


