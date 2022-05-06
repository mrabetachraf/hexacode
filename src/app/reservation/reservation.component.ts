import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Resevation } from '../module/reservation';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  event !: Event  ;
  title = 'EmailTemplate';
  nom!:string;
  closeResult! :string;
  listReservation :any;
  reservation ! : Resevation ;
  res :Resevation = new Resevation();
  page :number =1;
  count : number =0;
  tableSize : number =10;
  tableSizes : any =[5,10,15,20];
  constructor(private https: HttpClient, private reservationService : ReservationService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllResevations();
    this.reservation ={
      id :null ,
	    nom :null,
	    mail :null
    }

  }



  getAllResevations(){
    this.reservationService.getAllreservations().subscribe((res) => {
      this.listReservation=res })
  }
  addResevation(reservation:any){
    this.reservationService.addreservation(reservation).subscribe(() =>
     {this.getAllResevations(); });
   
  }

  editResevation(reservation:Resevation){
    this.reservationService.editreservation(reservation).subscribe();
  }

  deleteResevation(reservationid:any){
    this.reservationService.deletereservation(reservationid).subscribe(() => this.getAllResevations());
  }
 

  

  onSubmit() {
    this.reservationService.SendEmail(this.reservation)
    .subscribe(data => console.log(data));
    alert('mail sent') ;
  }


  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  onTableDataChange(event:any){
    this.page=event;
    this.getAllResevations();
  }
  onTableSizeChange(event:any):void{
    this.tableSize=event.target.value;
    this.page=1;
    this.getAllResevations();
  }
















 
}


