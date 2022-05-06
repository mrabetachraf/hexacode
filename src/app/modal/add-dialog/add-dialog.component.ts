import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SubjectService } from 'src/app/shared/services/subject.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  subjectForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    subtitle: new FormControl('', Validators.required),
   
  });



  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private subjectService: SubjectService) { }

  ngOnInit(): void {
    console.log(this.data.id)
  }


  addSubject() {
    const req: any = {
      title: this.subjectForm.get('title').value,
      subtitle: this.subjectForm.get('subtitle').value,
      user: {
        id:localStorage.getItem('id-user')
      }
    }
    this.subjectService.addSubject(req).subscribe(data => console.log('c bn'));
  }


}


