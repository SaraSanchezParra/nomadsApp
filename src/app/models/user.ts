import { Viaje } from "./viaje";

export class User {
  public user_Id: number
  public name: string;
  public surname: string;
  public email: string;
  public username: string;
  public descripcion: string;
  public photo: string;
  public favs: Viaje[];
  public misviajes: Viaje[];
  public password: string;
  public password2: string;


constructor(name: string, surname:string, email:string, username:string, descripcion:string, photo:string, favs:Viaje[], misviajes:Viaje[]) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.username = username;
    this.descripcion = descripcion;
    this.photo = photo;
    this.favs = favs;
    this.misviajes = misviajes;
    
  }
  setPassword (password:string){
    this.password = password;
    this.password2 = password;
  }
}

