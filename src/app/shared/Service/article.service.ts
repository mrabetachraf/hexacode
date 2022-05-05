import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 
    Url ='http://localhost:8085/feed/retrieveAllArticle';
    Url2='http://localhost:8085/feed/addArticle';
    Url3 ='http://localhost:8085/feed/updateArticle';
    Url4='http://localhost:8085/feed/delete-Article'
   constructor(private http :HttpClient) { }
 
   getAllArticle(){
     return this.http.get(this.Url);
   }
 
   addArticle(article: any){
     return this.http.post(this.Url2,article);
   }
   editArticle(article:any){
     return this.http.put(this.Url3,article)
   }
   deleteArticle(id :any){
     return this.http.delete(`${this.Url4}/${id}`)
   }
   addArticletodep(article: any , id:any){
    return this.http.post('http://localhost:8085/feed/add-article/'+id,article);
  }
  }