
import { Article } from "./article";
import { User } from "./user";

export class Comments {
    id:any;
    contenu:any;
    date:any ;
    user!:User;
    articles!:Article ;
    
    

}
/*
export interface RequestComments {
    text:string;
    author:string;
    date:Date;
}

export interface RepenseComments {
    id:number;
    text:string;
    author:string;
    date:Date;
    user:User;
    articles:Article;
}
*/