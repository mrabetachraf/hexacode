import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../Model/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {


  constructor(private http: HttpClient) { }
  public addQuestion(question: Question, idLevel: number): Observable<Question> {
    return this.http.post<Question>(`http://localhost:8090/addQuestion/${idLevel}`, question);
  }
  public getQuestions(idLevel: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8090/getQuestions/${idLevel}`);
  }
  public update(question: Question): Observable<Question>{
    return this.http.put<Question>(`http://localhost:8090/updateQuestion`, question);
  }
  public deleteQuestion(idQuestion : number) :Observable<Question>{
    return this.http.delete<Question>(`http://localhost:8090/deleteQuestion/${idQuestion}`);
  }
}
