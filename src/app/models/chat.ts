import { Mensajes } from "./mensajes";
export class Chats {

  public chat_id:number;
  public photo: string;
  public username: string;
  public hora: String
  public user_id_creador:number;
  public user_id_participante:number
  public mensajes:Mensajes[]

  constructor(photo:string, username:string, hora:string){
    this.photo=photo,
    this.username=username,
    this.hora=hora
  };

}