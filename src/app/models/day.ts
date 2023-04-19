import { PuntoDeInteres } from "./punto-de-interes";

export class Day {
    public dia_id: number
    public viaje_id: number
    public nombre: string
    public puntosDeInteres: PuntoDeInteres[]

    constructor(dia_id: number, viaje_id:number, nombre: string, puntosDeInteres: PuntoDeInteres[]) {
        this.dia_id = dia_id
        this.viaje_id =viaje_id;
        this.nombre = nombre;
        this.puntosDeInteres = puntosDeInteres
    }
}
