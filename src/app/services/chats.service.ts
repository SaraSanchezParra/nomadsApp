import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chats } from '../models/chat';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
 private url: string = "http://localhost:3000/chats"
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

}  



