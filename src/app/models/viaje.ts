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

    constructor(viaje_id: number, titulo: string, foto:string, descripcion: string, days: Day[], likes: number, user_id: number){
        this.viaje_Id = viaje_id
        this.titulo = titulo
        this.foto = foto
        this.descripcion = descripcion
        this.days = days
        this.likes = likes
        this.user_Id = user_id
    }
}
