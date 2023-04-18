export class PuntoDeInteres {

    // set up properties
    
    public dia_id: number
    public foto: string
    public nombre: string
    public corLong: string
    public corLat: string


    constructor(dia_id:number, foto: string, nombre: string, corLong: string, corLat: string) {
        this.dia_id = dia_id
        this.foto = foto
        this.nombre = nombre
        this.corLong = corLong
        this.corLat = corLat
    }
}
