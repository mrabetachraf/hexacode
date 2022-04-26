import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { History } from '../Model/History';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }
  public addHistory(history: History): Observable<History> {
    return this.http.post<History>(`http://localhost:8090/addHistory`, history);
  }
  public editHistory(history: History, username: string): Observable<History> {
    return this.http.put<History>(`http://localhost:8090/editHistory/${username}`, history);
  }
  public getHistories(): Observable<History[]> {
    return this.http.get<History[]>(`http://localhost:8090/getHistories`);
  }
  public findHistoryBySore(id: number): Observable<History> {
    return this.http.get<History>(`http://localhost:8090/findHistoryBySore/${id}`);
  }
  public findHistoryByUsername(username: string): Observable<History> {
    return this.http.get<History>(`http://localhost:8090/findHistoryByUsername/${username}`);
  }
}
