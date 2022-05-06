import { User } from "./user";

export class Message {
    id :any ;
    contenu!:string;
    sender!:User;
    receiver !:User;
    constructor(contenu:any,sender:any){
     this.contenu=contenu;
     this.sender=sender;
  
    }

}
