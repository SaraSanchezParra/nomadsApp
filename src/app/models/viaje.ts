import { Day } from "./day";

export class Viaje {

    public title: string
    public main_img: string
    public description: string
    public days: Day[]
    public likes: number

    constructor(title: string, main_img:string, description: string, days: Day[], likes: number){
        this.title = title
        this.main_img = main_img
        this.description = description
        this.days = days
        this.likes = likes
    }
}
