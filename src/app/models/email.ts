import { User } from "src/app/models/user";


export class Email {
    public nombre: string
    public asunto: string
    public email: string
    public mensaje: string

    constructor(nombre: string, asunto: string, email: string, mensaje: string) {
        this.nombre = nombre
        this.asunto = asunto
        this.email = email
        this.mensaje = mensaje

    }
}
