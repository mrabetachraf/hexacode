import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http: HttpClient) { }


  getAllResponse() {
    return this.http.get<any>(`${URL}/response/showallbynb`);
  }

  addResponse(response:any) {
    return this.http.post<any>(`${URL}/response/add-response`,response);
 }

 editResponse(response:any) {
  return this.http.put<any>(`${URL}/response/update-response`,response);
}
deleteResponse(id:any) {
  return this.http.delete(`${URL}/response/delete-response/${id}`);
}
}
