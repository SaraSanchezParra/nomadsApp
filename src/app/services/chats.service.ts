import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chats } from '../models/chat';
import { Mensajes } from '../models/mensajes';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
public chat_id: number;
 private url: string = "http://localhost:3000/chats"
 private url2:string = "http://localhost:3000/chat"
 private url3: string = "http://localhost:3000/mensajes"
 public chat : Chats;
    // private url: string = "https://nomads-api.vercel.app/"
  constructor(private http:HttpClient) { }


getChats(user_id:number){

  let url=(this.url + `?user_id=${user_id}`)
  return this.http.get(url)
}  
  
deleteChat(chat_id: number) {
  let deletedBook = {headers: null, body:{chat_id:chat_id}};
  return this.http.delete(this.url,deletedBook);
}

getChat(user_id_loged:number, user_id_buscado:number){
  let url2=(this.url2 + `?user_id_loged=${user_id_loged}&user_id_buscado=${user_id_buscado}`)
  return this.http.get(this.url2)
}

postChat(user_id_creador:number, user_id_participante:number, user_hora:string){
  let url=(this.url);
  let body = {user_id_creador: user_id_creador,
              user_id_participante: user_id_participante,
              user_hora: user_hora}
  return this.http.post(url, body)
}

getMessages(chat_id:number){
  let url=(this.url3 + `?chat_id=${chat_id}`)
  return this.http.get(url)
}


postMessages(newMessage:Mensajes){
  return this.http.post(this.url3,newMessage)
  }
}  



