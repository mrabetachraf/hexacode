import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http: HttpClient) { }

  public addResponse(response: Response, idQuestion: number): Observable<Response> {
    return this.http.post<Response>('http://localhost:8090/addResponse' +idQuestion, response);
  }
  public getResponses(idQuestion: number): Observable<Response[]> {
    return this.http.get<Response[]>('http://localhost:8090/getResponses' + idQuestion);
  }
}
