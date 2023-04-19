import { PathLocationStrategy } from "@angular/common";

export class Chats {

  public chat_id:number;
  public photo: string;
  public username: string;
  public hora: String
  public user_id_creador:number;
  public user_id_participante:number

  constructor(photo:string, username:string, hora:string){
    this.photo=photo,
    this.username=username,
    this.hora=hora,
    this.chat_id
    this.user_id_creador
    this.user_id_participante
  };

}