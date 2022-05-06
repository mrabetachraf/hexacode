import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Offer } from '../module/offer';
import { OfferService } from '../offer-component/offer.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  offers : any;
  offer! : Offer ;
  constructor(private  offerService : OfferService ,private router: Router) { }
  
  ngOnInit(): void {
    this.reloadData();

    this.offer={
      id : null ,
      title : null,	
      date : null,
      description: null ,
      location: null,
        nbParticipants: null ,
        pieceJointe:null,
        localisation : null 
    }
    
  }
  reloadData() {
    this.offers = this.offerService.getAllOffers();
  }

  deleteOffer(id: number) {
    this.offerService.deleteoffer(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  offerDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateOffer(id: number){
    this.router.navigate(['update', id]);
  }

}
