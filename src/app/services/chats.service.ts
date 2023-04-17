import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chats } from '../models/chat';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
 private url: string = "http://localhost:3000/"
    // private url: string = "https://nomads-api.vercel.app/"
 
  constructor(private http:HttpClient) { }


getChatsAll(){

  return this.http.get(this.url + "chats")
}  

getChat(username:string){
      let url=`http://localhost:3000/busquedaChat?username=${username}`
      return this.http.get(url)
    }  

  
    deleteChat(username: string) {
      const url = `http://localhost:3000/chatEliminado?username=${username}`;
      return this.http.delete(url);
    }
    
}  



