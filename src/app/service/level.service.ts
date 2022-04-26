import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Level } from '../Model/Level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http: HttpClient) { }

    public addLevel(level: Level, idTheme: number): Observable<Level> {
    return this.http.post<Level>(`http://localhost:8090/addLevel/${idTheme}`, level);
  }
  
  public getLevels(idTheme: number): Observable<Level[]> {
    return this.http.get<Level[]>(`http://localhost:8090/getLevels/${idTheme}`);
  }
  public getLevel(id: number): Observable<Level> {
    return this.http.get<Level>(`http://localhost:8090/getLevel/${id}`);
  }
}
