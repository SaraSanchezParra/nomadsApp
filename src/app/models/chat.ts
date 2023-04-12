import { PathLocationStrategy } from "@angular/common";

export class Chats {

  public photo: string;
  public nameUser:string;
  public hour:String

  constructor(photo:string,nameUser:string,hour:string){
    this.photo=photo,
    this.nameUser=nameUser,
    this.hour=hour
  };


}