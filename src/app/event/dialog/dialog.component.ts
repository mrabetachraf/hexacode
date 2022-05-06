import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { EventService } from 'src/app/Shared/services/event.service';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  eventForm!:FormGroup;
  actionBtn:String="Save"
  constructor(private formbuilder:FormBuilder, private eventservice:EventService,
    @Inject(MAT_DIALOG_DATA) public editData:any,private dialogRef:MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.eventForm=this.formbuilder.group({
      title:['',Validators.required],
      creator:['',Validators.required],
      departement:['',Validators.required],
      image:['',Validators.required],
      start_date:['',Validators.required],
      end_date:['',Validators.required],
      status:['',Validators.required],
      location:['',Validators.required],
      particpants_number:['',Validators.required],

    })

    if(this.editData){
      this.eventForm.controls['title'].setValue(this.editData.title);
      this.eventForm.controls['creator'].setValue(this.editData.creator);
      this.eventForm.controls['departement'].setValue(this.editData.departement);
      this.eventForm.controls['image'].setValue(this.editData.image);
      this.eventForm.controls['start_date'].setValue(this.editData.start_date);
      this.eventForm.controls['end_date'].setValue(this.editData.end_date);
      this.eventForm.controls['status'].setValue(this.editData.status);
      this.eventForm.controls['location'].setValue(this.editData.location);
      this.eventForm.controls['particpants_number'].setValue(this.editData.particpants_number);
      this.actionBtn="Update"
    }
  }

  addEvent(){
    if(!this.editData){
      if(this.eventForm.valid){
        console.log(this.eventForm.value);
     this.eventservice.createEvent(this.eventForm.value).subscribe({next:(res)=>{this.dialogRef.close('Save')}}
    );
      }
    }else{
      this.UpdateEvent()
    }
  }

  UpdateEvent(){
    this.eventservice.updateEvent(this.editData.id,this.eventForm.value)
    .subscribe({
      next:(res)=>{
        alert("Event Updated ");
        this.eventForm.reset();
        this.dialogRef.close("Update");
      },
      error:()=>{
        alert("Event Update Error ");
      }
    })
  }

}
