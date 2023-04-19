
import { Viaje } from "src/app/models/viaje";
import { User } from "./user";
import { Chats } from "./chat";

import { PuntoDeInteres } from "./punto-de-interes";


export class Respuesta {

  constructor(
    public error: boolean,
    public codigo: number,
    public mensaje: string,
    public data_viaje: Viaje[],
    public data_dia: PuntoDeInteres[],
    public data_user: User, //En caso de que solo se vaya a usar un usuaurio, especificar data_user[0] para acceder solo al primero.
    public data_chat: Chats,
    
    public data_users:User[]
    


    
  ){}


}

// error: false,
// codigo: 200,
// mensaje: 'chats encontrados',
// data: [
//   {
//     photo: 'https://estaticos-cdn.prensaiberica.es/clip/958630c2-98d1-4b52-bbc1-79f84d8a07ca_16-9-aspect-ratio_default_0.jpg',
//     username: '@laura',
//     hora: '13:00:00'
//   },
//   {
//     photo: 'https://img.freepik.com/foto-gratis/concepto-emociones-personas-foto-cabeza-hombre-guapo-aspecto-serio-barba-confiado-decidido_1258-26730.jpg',
//     username: '@juan',
//     hora: '12:30:00'
//   }
// ]
// }