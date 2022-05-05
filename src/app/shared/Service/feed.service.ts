import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedService {
  Url ='http://localhost:8085/feed/retrieveAllArticle';

  Url3 ='http://localhost:8085/feed/retrieveArticleOfTheYear';
  constructor(private http :HttpClient) { }

  getAllArticles(){
    return this.http.get(this.Url);
  }
 
  getListArticleTr(){
    return this.http.get(this.Url3);
  }
}
