import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from '../Model/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

 constructor(private http: HttpClient) { }
 public addTheme(theme: Theme): Observable<Theme> {
  return this.http.post<Theme>(`http://localhost:8090/addTheme`, theme);
}
public getThemes(): Observable<Theme[]> {
  return this.http.get<Theme[]>(`http://localhost:8090/getThemes`);
}
  public getTheme(idTheme: number): Observable<Theme> {
    return this.http.get<Theme>(`http://localhost:8090/getTheme/${idTheme}`);
}
  public deleteTheme(idTheme: number): Observable<Theme>{
    return this.http.delete<Theme>(`http://localhost:8090/deleteTheme/${idTheme}`);
}
}
