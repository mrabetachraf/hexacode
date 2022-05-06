import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 
    Url ='http://localhost:8086/feed/retrieveAllArticle';

    Url3 ='http://localhost:8086/feed/updateArticle';
    Url4='http://localhost:8086/feed/delete-Article'
   constructor(private http :HttpClient) { }
 
   getAllArticle(){
     return this.http.get(this.Url);
   }
 
   addArticle(article: any,id:any,idUser:any){
     return this.http.post('http://localhost:8086/feed/add-article/'+article+'/'+id,idUser)
   }
   editArticle(article:any){
     return this.http.put(this.Url3,article)
   }
   deleteArticle(id :any){
     return this.http.delete(`${this.Url4}/${id}`)
   }
  }