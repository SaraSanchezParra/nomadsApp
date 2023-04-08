import { PuntoDeInteres } from "./punto-de-interes";

export class Day {
    public day_id: number
    public puntosDeInteres: PuntoDeInteres[]

    constructor(puntosDeInteres: PuntoDeInteres[]) {
        this.puntosDeInteres = puntosDeInteres
    }
}
