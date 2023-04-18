import { User } from "src/app/models/user";
import { Day } from "./day";


export class Viaje {
    public viaje_Id: number
    public titulo: string
    public descripcion: string
    public ubicacion: string
    public foto: string
    public days: Day[]
    public likes: number
    public user_Id: number
    public users: User
    public user_foto: string

    constructor(viaje_id: number, titulo: string, ubicacion: string, foto:string, descripcion: string, days: Day[], likes: number, user_id: number, users: User, user_foto: string){
        this.viaje_Id = viaje_id
        this.titulo = titulo
        this.foto = foto
        this.descripcion = descripcion
        this.days = days
        this.likes = likes
        this.user_Id = user_id
        this.users = users
        this.user_foto = user_foto
    }
}
