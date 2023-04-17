import { PathLocationStrategy } from "@angular/common";

export class Chats {

  public chat_id:number;
  public photo: string;
  public username: string;
  public hora: String

  constructor(photo:string, username:string, hora:string){
    this.photo=photo,
    this.username=username,
    this.hora=hora,
    this.chat_id
  };

}