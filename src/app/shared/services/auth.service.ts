import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private REST_API_SERVER = 'http://localhost:8090/api';
  constructor(private httpService: HttpClient, private router: Router) { }

  signUpUser(user) {
    console.log(user.username);
    console.log(user.password);
    return this.httpService.post<any>(this.REST_API_SERVER + '/user/save', user);
  }

  signInUser(user) {
    console.log("data sent"+user)
    console.log("data sent")

    const payload = new HttpParams()
  .set('username', user.username)
  .set('password', user.password);




  
  let httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
  };
    return this.httpService.post<any>(this.REST_API_SERVER + '/login',payload,httpOptions);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/signin']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser(): any {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

}