import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from '../module/offer';
import { OfferService } from '../offer-component/offer.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {

  offre: Offer = new Offer();
  submitted = false;
  constructor(private  offerService : OfferService ,private router: Router) { }

  ngOnInit(): void {
  }
  newOffer(): void {
    this.submitted = false;
    this.offre = new Offer();
  }

  save() {
    this.offerService
    .addOffer(this.offre).subscribe(data => {
      console.log(data)
      this.offre = new Offer();
      this.gotoList();
    }, 
    error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/retrieve-all-offer']);
  }
}
