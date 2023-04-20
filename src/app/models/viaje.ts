import { User } from "src/app/models/user";
import { Day } from "./day";


export class Viaje {
    public viaje_id: number
    public titulo: string
    public descripcion: string
    public ubicacion: string
    public foto: string
    public days: Day[]
    public likes: number
    public user_id_propietario: number
    public users: User
    public user_foto: string

    constructor(viaje_id: number, titulo: string, ubicacion: string, foto:string, descripcion: string, days: Day[], likes: number, user_id_propietario: number, users: User, user_foto: string){
        this.viaje_id = viaje_id
        this.titulo = titulo
        this.ubicacion = ubicacion
        this.foto = foto
        this.descripcion = descripcion
        this.days = days
        this.likes = likes
        this.user_id_propietario = user_id_propietario
        this.users = users
        this.user_foto = user_foto
    }
}
