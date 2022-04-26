import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  readonly API_URL = 'http://localhost:8089/SpringMVC/collaborator';
  constructor(private httpClient : HttpClient) { }

  getAllcollaborators() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-collaborator`)
  }
  addcollaborator(collab:any){
    return this.httpClient.post(`${this.API_URL}/add-collaborator`,collab)
  }
  editcollaborator(collab:any){
    return this.httpClient.put(`${this.API_URL}/modify-collaborator`,collab)
  }
  deletecollaborator(collaboratorid:any){
    return this.httpClient.delete(`${this.API_URL}/delete-collaborator/${collaboratorid}`)
  }

}
