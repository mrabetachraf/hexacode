import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly API_URL = 'http://localhost:8089/SpringMVC/rating';
  constructor(private httpClient : HttpClient) { }

  GetAllUsers (){
    return this.httpClient.get(`${this.API_URL}/displayUsers`);
  }
}
