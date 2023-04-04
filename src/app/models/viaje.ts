import { Day } from "./day";

export class Viaje {

    public title: string
    public main_img: string
    public days: Day[]

    constructor(title: string, main_img:string, days: Day[]){
        this.title = title
        this.main_img = main_img
        this.days = days
    }
}
