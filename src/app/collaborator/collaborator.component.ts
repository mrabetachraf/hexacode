import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Collaborator } from '../module/collaborator';
import { CollaboratorService } from './collaborator.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent implements OnInit {
  
  listCollaborators :any;
  form : boolean=false ;
  collaborator! : Collaborator ;
  closeResult! :string;

  POSTS :any ;
  page :number =1;
  count : number =0;
  tableSize : number =10;
  tableSizes : any =[5,10,15,20];
  constructor(private  collaboratorService : CollaboratorService , private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getAllcollaborators();  
    this.collaborator={
      id: null ,
     nom :  null ,
     offre :  null ,
     rate :  null ,
     duree :  null 
    
  };

}
getAllcollaborators(){
  this.collaboratorService.getAllcollaborators().subscribe(res => this.listCollaborators=res)
}

addcollaborator(collab:any){
  this.collaboratorService.addcollaborator(collab).subscribe(() => {
    this.getAllcollaborators();
    this.form =false ;
  });
}

editcollaborator(collab:Collaborator){
  this.collaboratorService.editcollaborator(collab).subscribe();
}

deletecollaborator(collabid:any){
  this.collaboratorService.deletecollaborator(collabid).subscribe(() => this.getAllcollaborators());
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

onTableDataChange(event:any){
  this.page=event;
  this.getAllcollaborators();
}
onTableSizeChange(event:any):void{
  this.tableSize=event.target.value;
  this.page=1;
  this.getAllcollaborators();
}








}