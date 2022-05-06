import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resevation } from '../module/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  url='http://localhost:8089/SpringMVC/reservation';
  readonly API_URL = 'http://localhost:8089/SpringMVC/mail';
  constructor(private http :HttpClient) { }

  getAllreservations() {
    return this.http.get(`${this.url}/retrieve-all-reservation`)
  }
  addreservation(reservation:any){
    return this.http.post(`${this.url}/add-reservation/1`,reservation)
  }
  editreservation(reservation:any){
    return this.http.put(`${this.url}/modify-reservation`,reservation)
  }
  deletereservation(reservationid:any){
    return this.http.delete(`${this.url}/delete-reservation/${reservationid}`)
  }
  




  SendEmail(res:Resevation){
    return this.http.post(`${this.API_URL}/sendHtmlEmail/1`,res);
  }


}
