
import { User }  from "./user";
import {Article} from "./article";
export class LikeArticle {
    id :any ;
    date :any ;
    clic_like:any ;
    react: any | "haha"|"like"|"angry"|"love"|"sad"|"solidarity"|"wow";
    user!:User ;
    articles!:Article ;
}
