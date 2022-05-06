import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  readonly API_URL = 'http://localhost:8089/SpringMVC/rating';
  constructor(private httpClient : HttpClient) { }


  addRating(rating:any ,collabId:any){
    return this.httpClient.post(`${this.API_URL}/save-Rating/1/${collabId}`,rating)
  }
  GetAllUsers (){
    return this.httpClient.get(`${this.API_URL}/displayUsers`);
  }
}
