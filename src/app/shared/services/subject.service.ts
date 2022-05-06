import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }


  getAllSubjects() {
    return this.http.get<any>(`${URL}/subject/showall`);
  }

  addSubject(subject:any) {
    return this.http.post<any>(`${URL}/subject/add-subject`,subject);
 }

 editSubject(subject:any) {
  return this.http.put<any>(`${URL}/subject/update-subject`,subject);
}
deleteSubject(id:any) {
  return this.http.delete(`${URL}/subject/delete-subject/${id}`);
}

}
