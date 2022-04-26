import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  subjects: any;

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.loadSubjects();  
  }

onDelete(id : number){
  this.subjectService.deleteSubject(id).subscribe(data => {
    this.loadSubjects();
  });
}


loadSubjects(){
  this.subjectService.getAllSubjects().subscribe(x => {
    this.subjects = x;
  });
}
}
