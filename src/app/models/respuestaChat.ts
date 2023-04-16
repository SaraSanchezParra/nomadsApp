import { Chats } from "./chat";

export class RespuestaChat {

  constructor(
    public error: boolean,
    public codigo: number,
    public mensaje: string,
    public data: Chats [],
    
  ){}


}