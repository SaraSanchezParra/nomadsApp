export class PuntoDeInteres {

    // set up properties
    
    public pI_id: number
    public foto: string
    public nombre: string
    public corLong: string
    public corLat: string


    constructor(foto: string, nombre: string, corLong: string, corLat: string) {
        this.foto = foto
        this.nombre = nombre
        this.corLong = corLong
        this.corLat = corLat
    }
}
