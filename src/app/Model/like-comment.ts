import { Comments } from "./comments";
import { User }  from "./user";
export class LikeComment {
    id:any;
    isLiked:any;
    TypeOfLikes:any|"Like"|"Dislike";
    user!:User ;
    article_comment!:Comments;
}
