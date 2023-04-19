export class Mensajes {

    public mensaje_id:number;
    public emisor: number;
    public mensaje_body: string;
  
    constructor(emisor:number, mensaje_body:string){
      this.emisor=emisor,
      this.mensaje_body=mensaje_body
  
    }
  
  }