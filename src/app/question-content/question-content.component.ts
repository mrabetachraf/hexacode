import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../Model/Question';
import { QuestionService } from '../service/question.service';
import { ResponseService } from '../service/response.service';
@Component({
  selector: 'app-question-content',
  templateUrl: './question-content.component.html',
  styleUrls: ['./question-content.component.css']
})
export class QuestionContentComponent implements OnInit {
  questions: Question[];
  responses: Response[];
  dialogRef: any;
  id: number;

  constructor(private dialog: MatDialog, private questionService: QuestionService, private route: ActivatedRoute,
              private responseService: ResponseService) {
    this.route.params.subscribe(
      params => {
        
        this.questionService.getQuestions(this.id).subscribe(questions => {
          this.questions = questions;
        });
      }
    )
  }

  ngOnInit(): void {
  }
}
