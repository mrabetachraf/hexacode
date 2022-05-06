import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../module/offer';


@Injectable({
  providedIn: 'root'
})
export class OfferService {
  offre !: Offer[] ;
  readonly API_URL = 'http://localhost:8089/SpringMVC/offer';
  baseApiUrl = "https://file.io" ;
  constructor(private httpClient : HttpClient) { }

  getAllOffers() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-offer`)
  }
  addOffer(offer:any){
    return this.httpClient.post(`${this.API_URL}/add-offer`,offer)
  }
  editoffer(offer:any){
    return this.httpClient.put(`${this.API_URL}/modify-offer`,offer)
  }
  deleteoffer(offerid:any){
    return this.httpClient.delete(`${this.API_URL}/delete-offer/${offerid}`)
  }
 
  upload(file:any):Observable<any> {
  
    // Create form data
    const formData = new FormData(); 
    
    // Store form name as "file" with file data
    formData.append("file", file, file.name);

    
    // this.httpClient.post(`${this.API_URL}/add-offer`,file) 
    // this.httpClient.put(`${this.API_URL}/modify-offer`,file)
  
    // Make http post request over api
    // with formData as req
    return this.httpClient.post(this.baseApiUrl ,formData ) ;
} 

// offreRecherche= [];
// rechercherParid(id:number):Offer[]{
  
//   this.offre.forEach((cur,index)=>
//    {
//      if(id==cur.id) {
//       console.log("cur "+cur);
//       this.offreRecherche.push(cur);
//     }
// });
//   return this.offreRecherche;
// }







}
