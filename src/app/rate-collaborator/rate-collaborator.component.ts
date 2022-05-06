import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CollaboratorService } from '../collaborator/collaborator.service';
import { Collaborator } from '../module/collaborator';
import { Rating } from '../module/rating';
import { User } from '../module/user';
import { RateService } from './rate.service';

@Component({
  selector: 'app-rate-collaborator',
  templateUrl: './rate-collaborator.component.html',
  styleUrls: ['./rate-collaborator.component.css']
})
export class RateCollaboratorComponent implements OnInit {
  listUsers :any;
  closeResult! :string;
  listCollaborators :any;
  rateList : any;
  collaborator! : Collaborator ;
  user ! : User ; 
 rating ! : Rating ;
 
 form !: FormGroup;
  ctrl = new FormControl(null, Validators.required);
  constructor ( private  collaboratorService : CollaboratorService  , private rateService : RateService ,private modalService: NgbModal) {
   
    
   }

  ngOnInit(): void {
    this.getAllcollaborators();  
    this.getAllUsers();
    
    this.collaborator={
      id : null ,
     nom :  null ,
     offre :  null ,
     rate :  null ,
     duree :  null 
    };
    this.user= {
      id :null,
	    name:null,
	    Dob:null,
	    PhotoProfil:null ,
	    Headline:null , 
	    current_position:null,
	    education:null,
	   location:null,
	   contact_info:null,
	   experience:null,
	   points :null,
	   Role:null 
    };
    

  }
  getAllcollaborators(){
    this.collaboratorService.getAllcollaborators().subscribe(res => this.listCollaborators=res)
  }
  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  addRating(rating:any,collabId:any){
    this.rateService.addRating(rating, collabId).subscribe();
  }
  getAllUsers(){
    this.rateService.GetAllUsers().subscribe(res => this.listUsers=res)
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
