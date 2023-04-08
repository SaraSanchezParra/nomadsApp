export class PuntoDeInteres {

    // set up properties
    
    public pI_id: number
    public img_url: string
    public title: string

    constructor(img_url: string, title: string) {
        this.img_url = img_url
        this.title = title
    }
}
