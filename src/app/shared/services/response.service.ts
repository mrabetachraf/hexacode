import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http: HttpClient) { }

  incrimentlikes(id:any) {
    return this.http.get<any>(`${URL}/response/increlike/${id}`);
  }

  getAllResponse() {
    return this.http.get<any>(`${URL}/response/showallbynb`);
  }

  getAllBySubjectId(id:any) {
    return this.http.get<any>(`${URL}/response/getallbysubjectid/${id}`);
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
