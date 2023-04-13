import { Injectable } from '@angular/core';
import { Viaje } from '../models/viaje';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {
 //private url: string = "http://localhost:3000/"
 private url: string = "https://nomads-api.vercel.app/"
 
 public user: User;
 public user_logged: User;
 public loged: boolean;
 public showHeaderFooter: boolean;  

  constructor(private http:HttpClient) { 
    this.user = new User(
      "Juan",
      "Pérez",
      "juanperez@gmail.com",
      "@juanperez",
      "Me encanta viajar por España y descubrir nuevos rincones",
      "https://maxilodexeus.com/wp-content/uploads/2020/03/foto-stories-1-scaled.jpg",
      [
        new Viaje("Malaga Costa", "https://www.costacruceros.es/content/dam/costa/costa-magazine/article-images/things-to-do-in-malaga/malaga1.jpg.image.694.390.low.jpg", "Visita la costa del Sol y nunca querrás irte", [], 120), 
        new Viaje('Sevilla', 'https://www.lavanguardia.com/files/content_image_mobile_filter/files/fp/uploads/2019/09/30/5fa52ff369941.r_d.328-221.jpeg', 'Disfruta de su color y su encanto',[], 120), 
        new Viaje('Madrid Centro', 'https://media.istockphoto.com/id/1059076792/es/foto/madrid-ciudad-skyline-gran-v%C3%ADa-calle-crep%C3%BAsculo-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=gWGpBRHVNJleHrVRmetRPTFuau_aahvCUKDMNfCrMNE=', 'Como siempre, de Madrid al cielo',[], 600)
      ],
      [ new Viaje('Salamanca', 'https://www.hosteleriasalamanca.es/fotos/16609023601.jpg', 'El pueblo más encantador de España',[],260),
                   new Viaje ('Segovia', 'https://interrailero.com/wp-content/uploads/2022/07/que-ver-en-segovia-en-un-dia.jpg', 'Visita la ciudad con restos romanos.',[], 20),
                   new Viaje ('Zaragoza', 'https://a.cdn-hotels.com/gdcs/production10/d1442/77b32160-68ce-11e8-8a0f-0242ac11000c.jpg?impolicy=fcrop&w=800&h=533&q=medium', 'De noche o de día, Zaragoza es alegría.',[], 400),
                   new Viaje ('Asturias', 'https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1647207085851-BRMECNXZTR3JTF2XWV74/que-ver-en-espana-picos.jpg?format=1500w', 'Verde que te quiero verde: los mejores paisajes.',[], 800)])
  
      this.loged=false;
      this.showHeaderFooter=false;
      this.user_logged = new User(
        "Juan",
      "Pérez",
      "juanperez@gmail.com",
      "@other",
      "Me encanta viajar por España y descubrir nuevos rincones",
      "https://maxilodexeus.com/wp-content/uploads/2020/03/foto-stories-1-scaled.jpg",
      [
        new Viaje("Malaga Costa", "https://www.costacruceros.es/content/dam/costa/costa-magazine/article-images/things-to-do-in-malaga/malaga1.jpg.image.694.390.low.jpg", "Visita la costa del Sol y nunca querrás irte", [], 120), 
        new Viaje('Sevilla', 'https://www.lavanguardia.com/files/content_image_mobile_filter/files/fp/uploads/2019/09/30/5fa52ff369941.r_d.328-221.jpeg', 'Disfruta de su color y su encanto',[], 120), 
        new Viaje('Madrid Centro', 'https://media.istockphoto.com/id/1059076792/es/foto/madrid-ciudad-skyline-gran-v%C3%ADa-calle-crep%C3%BAsculo-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=gWGpBRHVNJleHrVRmetRPTFuau_aahvCUKDMNfCrMNE=', 'Como siempre, de Madrid al cielo',[], 600)
      ],
      [ new Viaje('Salamanca', 'https://www.hosteleriasalamanca.es/fotos/16609023601.jpg', 'El pueblo más encantador de España',[],260),
                   new Viaje ('Segovia', 'https://interrailero.com/wp-content/uploads/2022/07/que-ver-en-segovia-en-un-dia.jpg', 'Visita la ciudad con restos romanos.',[], 20),
                   new Viaje ('Zaragoza', 'https://a.cdn-hotels.com/gdcs/production10/d1442/77b32160-68ce-11e8-8a0f-0242ac11000c.jpg?impolicy=fcrop&w=800&h=533&q=medium', 'De noche o de día, Zaragoza es alegría.',[], 400),
                   new Viaje ('Asturias', 'https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1647207085851-BRMECNXZTR3JTF2XWV74/que-ver-en-espana-picos.jpg?format=1500w', 'Verde que te quiero verde: los mejores paisajes.',[], 800)])
  
      this.loged=false;
      this.showHeaderFooter=false;
    }

    postRegister (user:User){
      return this.http.post(this.url + "registrar",user)
    }

};

    


  
  


