import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogResComponent } from 'src/app/modal/add-dialog-res/add-dialog-res.component';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  subjects: any;

  constructor(private subjectService: SubjectService,public dialog: MatDialog) { }

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

openDialog(id: number){
  const DIALOGREF = this.dialog.open(AddDialogResComponent, {
    width : '830px',
    data: {
      id: id
    }
  });
  DIALOGREF.afterClosed().subscribe(rst => {
    console.log(rst)
   
    
  })
}
}
