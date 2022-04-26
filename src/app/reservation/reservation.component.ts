import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Resevation } from '../module/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  title = 'EmailTemplate';
  reservation ! : Resevation ;
  constructor(private https: HttpClient) { }

  ngOnInit(): void {
    this.reservation ={
      id :null ,
	    nom :null,
	    mail :null
    }

  }


  onSubmit(offerid:any){
    this.https.post<Resevation>('http://localhost:8089/SpringMVC/mail',`${ this.reservation}/sendSimpleEmail/${offerid}`).subscribe(
        res => {
          this.reservation = res;
          console.log(this.reservation);
          alert('Email Sent successfully');
          this.reservation.nom = '';
          this.reservation.mail = '';
         
        });
  }
}


