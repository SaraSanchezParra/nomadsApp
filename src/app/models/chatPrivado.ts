export class ChatPrivado {


    // set up properties

    public emisor_id: number;
    public mensaje_body: string;
    public hora: string;
    public photo: string;

    constructor(emisor_id:number, mensaje_body:string, hora: string, photo:string) {
        this.emisor_id = emisor_id
        this.mensaje_body = mensaje_body
        this.hora = hora
        this.photo = photo

    }

}
