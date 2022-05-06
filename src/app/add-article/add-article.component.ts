import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../shared/services/subject.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  subjectForm = new FormGroup({ 
    title: new FormControl('', [Validators.required]),
    subtitle: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
  });

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
  }

  addSubject(){
const req: any = {
  title:this.subjectForm.get('title').value,
  subtitle:this.subjectForm.get('subtitle').value,
  user:{
    id:this.subjectForm.get('userId').value
  }
  }
  this.subjectService.addSubject(req).subscribe(data => console.log('c bn'));
  }
}
