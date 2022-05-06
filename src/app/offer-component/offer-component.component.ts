import { Component, OnInit, ViewChild } from '@angular/core';
import { Offer } from '../module/offer';
import { OfferService } from './offer.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from '@yuvarajv/ngx-google-places-autocomplete';
@Component({
  selector: 'app-offer-component',
  templateUrl: './offer-component.component.html',
  styleUrls: ['./offer-component.component.css']
})
export class OfferComponentComponent implements OnInit {
  title !: string ;
   listOffers :any;
  form : boolean=false ;
  offer! : Offer;
  closeResult! :string;
  name = "Angular PDF";
  POSTS :any ;
  page :number =1;
  count : number =0;
  tableSize : number =10;
  tableSizes : any =[5,10,15,20];
  baseApiUrl = "https://file.io" ;
  
  
  

  @ViewChild("placesRef") placesRef !: GooglePlaceDirective;

  options = {
    types : [],
    componentRestrictions: { country: 'MX' }
  };

  title_add:any;
  latitude:any;
  longitude:any;
  zoom:any;
  

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file : any = null; // Variable to store file

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  constructor(private  offerService : OfferService , private modalService: NgbModal) { }
  
  ngOnInit(): void {
    this.setCurrentLocation();
    this.getAllOffers();

    
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


  displayedColumns: string[] = ['id', 'title', 'date', 'description','location','nbParticipants'];
 

  getAllOffers(){
    this.offerService.getAllOffers().subscribe((res) => {
      this.listOffers=res })
  }
  addOffer(offer:any){
    this.offerService.addOffer(offer).subscribe(() => {
      this.getAllOffers();
      this.form =false ;
    });
  }

  editoffer(offer:Offer){
    this.offerService.editoffer(offer).subscribe();
  }

  deleteoffer(offerid:any){
    this.offerService.deleteoffer(offerid).subscribe(() => this.getAllOffers());
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

 
  // On file Select
  onChange(event:any) {
    this.file = event.target.files[0];
}

// OnClick of button Upload
onUpload() {
  
    this.loading = !this.loading;
    console.log(this.file);
    
    

    this.offerService.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;
                

                this.loading = false; // Flag variable 
            }
            this.getAllOffers();
            this.form =false ;
           
        }
        
    );
    this.shortLink.toString = this.offer.pieceJointe ;
   
    this.offerService.editoffer(this.file).subscribe();
    
   
}

onTableDataChange(event:any){
  this.page=event;
  this.getAllOffers();
}
onTableSizeChange(event:any):void{
  this.tableSize=event.target.value;
  this.page=1;
  this.getAllOffers();
}

// google Maps

public handleAddressChange(address: Address) {
  // Do some stuff
  console.log(address);
  console.log('Latitud : ' + address.geometry.location.lat());
  console.log('Longitud : ' + address.geometry.location.lng());

  this.latitude = address.geometry.location.lat();
  this.longitude = address.geometry.location.lng();
  
}
public setCurrentLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 15;
    })
  }
}










  
}
