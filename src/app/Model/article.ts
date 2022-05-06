import { Comments } from "./comments";
import { Departements } from "./departements";
import { User } from "./user";
export class Article {
    id!:number;
    subject: any ;
    title:any ;
    date:any;
    subtitle: any ;
    content: any ;
    author:any ;
    user!:User;
    article_commentSet!:Comments;
    dep!:Departements;
}
