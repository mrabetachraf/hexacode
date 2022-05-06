import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Comments } from '../Model/comments';
import { Message } from '../Model/message';

@Injectable({
  providedIn: 'root'
})
export class ArtdetailService {
  url = 'http://localhost:8086/feed/retrieveArticleOfTheYear';
  url2 = 'http://localhost:8086/addCommentArticle';

  constructor(private http: HttpClient) {
    
  }


  getArticleParDate() {
    return this.http.get(this.url);
  }

  getUser(idUser: number) {
    return this.http.get('http://localhost:8086/feed/retriveuser/' + idUser);
  }
  getAllComments(idArticle:any) {
   return this.http.get('http://localhost:8086/feed/RetrieveComments/'+idArticle);
  }
  addComments(comment : any, idArticle : any) {
    //const headers = new HttpHeaders().set('content-type', 'application/json');

  
    return this.http.post('http://localhost:8086/feed/addCommentArticle/1/'+idArticle, comment )
        .pipe();
  }
  pubWithInteract() {
    return this.http.get('http://localhost:8086/feed/AlaUne');
  }
  public getCommentsById(id: number) {
  
  }
  getPub(idpub: number) {
    return this.http.get("http://localhost:8086/feed/retrieveArticle/" + idpub);
  }
  AddLoveArticle(likes :any ,idArticle:any ){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('http://localhost:8086/feed/AddLoveArticle/1/' +idArticle, likes).pipe();

  }
  AddLikeArticle(likes :any ,idArticle:any ){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('http://localhost:8086/feed/AddLikesArticle/1/' +idArticle, likes).pipe();

  }
  AddHahaArticle(likes :any ,idArticle:any ){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('http://localhost:8086/feed/AddHahaArticle/1/' +idArticle, likes).pipe();

  }
  AddSadArticle(likes :any ,idArticle:any ){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('http://localhost:8086/feed/AddSadArticle/1/' +idArticle, likes).pipe();
  }
  AddAngryArticle(likes:any ,idArticle:any ){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('http://localhost:8086/feed/AddANgryArticle/1/'+idArticle, likes).pipe();
  }
  AddWowArticle(likes:any ,idArticle:any ){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('http://localhost:8086/feed/AddWowArticle/1/'+idArticle, likes).pipe();
  }
  AddLikeComment(like:any ,idcomment:any ){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('http://localhost:8086/feed/AddLikeComment/1/'+idcomment, like).pipe();
  }
  AddDisLikeComment(like:any ,idcomment:any ){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('http://localhost:8086/feed/AddDisLikeComment/1/'+idcomment, like).pipe();
  }
  
}
