import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { History } from '../Model/History';
import { Question } from '../Model/Question';
import { HistoryService } from '../service/history.service';
import { LevelService } from '../service/level.service';
import { QuestionService } from '../service/question.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  dialogRef: any;
  questions: Question[];
  history: History = {} as History;
  histories: History[];
  idLevel: number;
  level: any;
  counter = 0;
  score = 0;
  btnDisabled = true;
  username: string;

  constructor(private dialog: MatDialog, private questionService: QuestionService, private route: ActivatedRoute,
              private levelService: LevelService, private historyService: HistoryService,
              private userService: UserService) {}

  ngOnInit(): void {

  }

}
