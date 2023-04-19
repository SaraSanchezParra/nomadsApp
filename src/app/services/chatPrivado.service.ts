import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chats } from '../models/chat';
import { Mensajes } from '../models/mensaje';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ChatPrivadoService {
 private url: string = "http://localhost:3000/mensajes"
    // private url: string = "https://nomads-api.vercel.app/"
  constructor(private http:HttpClient) { }


getMessages(chat_id:number){
  let url=(this.url + `?chat_id=${chat_id}`)
  return this.http.get(url)
}

postMessages(newMessage:Mensajes){
return this.http.post(this.url,newMessage)
}

}