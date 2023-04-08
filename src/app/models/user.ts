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


constructor(name: string, surname:string, email:string, username:string, descripcion:string, photo:string, favs:[{titulo:string, descripcion:string, imagen:string, likes:number}], misviajes:[{titulo: string, descripcion: string, imagen: string, likes: number}]) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.username = username;
    this.descripcion = descripcion;
    this.photo = photo;
  }
}

let user1 = new User(
    "Juan",
    "Pérez",
    "juanperez@gmail.com",
    "@juanperez",
    "Me encanta viajar por España y descubrir nuevos rincones",
    "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/j/jua/large/30472.png",
    [{
        titulo:"Málaga",
        descripcion: "Sol, playa y arte. Descubre la costa del Sol.",
        imagen:"https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/andalucia/malaga-noche-c-david-becker-u-h1y4jJOW-l0.jpg_1570148651.jpg",
        likes:25
    }],
    [{
        titulo:"Cádiz",
        descripcion: "Por las playas de Barbate...",
        imagen:"https://www.barcelo.com/guia-turismo/wp-content/uploads/2019/10/cadiz_barbate_888.jpg",
        likes:50
    }]
);
