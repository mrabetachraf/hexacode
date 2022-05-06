import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResponseService } from 'src/app/shared/services/response.service';

@Component({
  selector: 'app-add-dialog-res',
  templateUrl: './add-dialog-res.component.html',
  styleUrls: ['./add-dialog-res.component.css']
})
export class AddDialogResComponent implements OnInit {
  responseForm = new FormGroup({
    content: new FormControl('', [Validators.required])
    
   
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private responseService: ResponseService) { }

  ngOnInit(): void {
    console.log(this.data.id)
  }

  addResponse(){
    const req: any = {
      content:this.responseForm.get('content').value,
      subject:{
        id:this.data.id

    },
    nbLike: 0
      }
      this.responseService.addResponse(req).subscribe(data => console.log('c bn'));
      }
      

}
