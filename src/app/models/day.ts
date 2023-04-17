import { PuntoDeInteres } from "./punto-de-interes";

export class Day {
    public viaje_id: number
    public nombre: string
    public puntosDeInteres: PuntoDeInteres[]

    constructor(viaje_id:number, nombre: string, puntosDeInteres: PuntoDeInteres[]) {
        this.viaje_id =viaje_id;
        this.nombre = nombre;
        this.puntosDeInteres = puntosDeInteres
    }
}
