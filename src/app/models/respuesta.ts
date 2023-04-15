
import { Viaje } from "src/app/models/viaje";
import { User } from "./user";
import { Chats } from "./chat";
import { ChatPrivado } from "./chatPrivado";
import { Day } from "./day";
import { PuntoDeInteres } from "./punto-de-interes";


export class Respuesta {

  constructor(
    public error: boolean,
    public codigo: number,
    public mensaje: string,
    public data_viaje,
    public data_user: User, //En caso de que solo se vaya a usar un suaurio, especificar data_user[0] para acceder solo al primero.
    public data_chat: Chats,
    public chatPrivado: ChatPrivado[],
    public data_dia: PuntoDeInteres[]
    


    
  ){}


}