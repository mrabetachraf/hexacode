import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shared/Service/article.service';
import { Article } from '../shared/Model/article';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../shared/Model/user';
import { Departements } from '../shared/Model/departements';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

 


  listArticle : any; 
  form : boolean = false;
   article!: Article;
   closeResult! : string;
   idUser!:User;
   id!:Departements;
  constructor(private articleService :ArticleService , private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllArticles();

  
    
  }

  getAllArticles(){
    this.articleService.getAllArticle().subscribe(res => this.listArticle= res)
   
  }

addArticle(article: any,idUser:any,id:any){
    this.articleService.addArticle(article,id,idUser).subscribe(() => {
      this.getAllArticles();
      this.form = false;
    });
  }

  editArticle(article : Article){
    this.articleService.editArticle(article).subscribe();
  }
  deleteArticle(id : any){
    this.articleService.deleteArticle(id).subscribe(() => this.getAllArticles());
  }
  open(content: any) {
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
  closeForm(){

  }
  cancel(){
    this.form = false;
  }

}
