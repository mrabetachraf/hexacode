import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cpuUsage } from 'process';
import { ResponseService } from '../shared/services/response.service';

@Component({
  selector: 'app-article-detaiil',
  templateUrl: './article-detaiil.component.html',
  styleUrls: ['./article-detaiil.component.css']
})
export class ArticleDetaiilComponent implements OnInit {

  responses : any[] = [];
  subjectId: any;
  

  constructor(private responseService: ResponseService,private route: ActivatedRoute,private cdr: ChangeDetectorRef) {
   }

  ngOnInit(): void {
    this.subjectId=this.route.snapshot.paramMap.get('id');
    this.loadResponse();
    
  }
  onIncr(id : number){
    this.responseService.incrimentlikes(id).subscribe(data => {
      this.loadResponse();
      this.cdr.detectChanges();
    });
}

loadResponse(){
  this.responseService.getAllBySubjectId(this.subjectId).subscribe(data => {
    this.responses = data;
  });
}
}
