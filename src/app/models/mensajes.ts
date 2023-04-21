import { Chats } from "./chat";

export class Mensaje {

    public mensaje_id:number;
    public emisor: number;
    public mensaje_body: string;
    public chat_id:number;
    constructor(emisor:number, mensaje_body:string,chat_id:number){
      this.emisor=emisor,
      this.mensaje_body=mensaje_body
      this.chat_id=chat_id
    }
  
  }