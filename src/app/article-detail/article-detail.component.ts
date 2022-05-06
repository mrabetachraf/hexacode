import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ArtdetailService } from 'src/app/shared/Service/artdetail.service';
import { Article } from 'src/app/shared/Model/article';
import { User } from '../shared/Model/user';
import { Comments } from '../shared/Model/comments';
import { ActivatedRoute, Router } from '@angular/router';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import {MatTreeModule} from '@angular/material/tree';
import { LikeArticle } from '../shared/Model/like-article';
import { Departements } from '../shared/Model/departements';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { Loader } from '@googlemaps/js-api-loader';
import { LikeComment } from '../shared/Model/like-comment';
import { Message } from '../shared/Model/message';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

 sender !:User;
 receiver!:User ;
 message!:Message;
  article_comment!:Comments;
  listArticle: any;
  articles!: Article;
  users: number[] = [1, 2, 3, 4];
  user!: User;
  com: string = '';
  paramurl: any;
  playsound = false;
  showEmojiPicker = false;
  author!: User;
  likes!:LikeArticle;
  comment!: Comments;
  like!:LikeComment;
  comments!: Comments[] ;
  commm: Comments[] | undefined;
  id_user!: User;
  idArticle!: Article;
  idcomment!:Comments;
  article_commentSet!:Comments;
  idpub!: Article;
  dep!:Departements;
  list:any;
showComment:boolean=false;
page:number=1;
count:number=0;
tablesize:number=1;
tablesizes:any=[2,10,15,20];
page1:number=1;
count1:number=0;
tablesize1:number=1;
tablesizes1:any=[2,10,15,20];
    constructor(private articleService: ArtdetailService,
    private activatedroute: ActivatedRoute,
    private route: Router,
    private renderer: Renderer2,
    private http: HttpClient,
    private modalService: NgbModal
  ) { }
  ngOnInit(): void {

      // this.map = new google.maps.Map(document.getElementById('map'),{
      //   center : location,
      //   zoom:6,
      //  })
      //  const marker = new google.maps.Map.Marker
    

    
this.getArticlesDetailles();


    this.comment = {
      id : 0,
      contenu:null,
      date:null,
      user: this.user,
      articles:this.articles,

    }
    this.likes={
      id :0,
      date:null,
      clic_like:null,
      react:null,
      user:this.user,
      articles:this.articles,
    }
    this.articles={
      id:0,
      subject: null,
      title: null,
      date:null,
      subtitle: null,
      content: null,
      author:null,
      user :this.user,
      article_commentSet:this.comment,
      dep:this.dep,

    }
this.like={
  id:null,
  isLiked:null,
  TypeOfLikes:null,
  user:this.user ,
  article_comment:this.comment,

}
this.message={
  id:null,
  contenu:'',
  sender:this.user,
  receiver:this.user,
}
  }



 
  
  // private map :google.maps.Map
  getArticlesDetailles(){
    this.articleService.pubWithInteract().subscribe(res => {
      this.listArticle = res
 
    })
   
  }
  
 OnTableData(event :any){
  this.page=event;
  this.getArticlesDetailles();
}

 OnTablesizeChange(event:any):void{
   this.tablesize=event.target.value;
   this.page =1;
   this.getArticlesDetailles();
 }

 OnTableData1(event :any){
  this.page1=event;
  this.getAllcomment(this.idArticle);
}

 OnTablesizeChange1(event:any):void{
   this.tablesize1=event.target.value;
   this.page1 =1;
   this.getAllcomment(this.idArticle);
 }

 getAllcomment(idArticle:any){
  this.showComment=!this.showComment;
  if (this.showComment){
   this.articleService.getAllComments(idArticle).subscribe(res => {
     this.list=res
    });
   }
   else{
     console.log()
   }
   
  
 }



  addComments(comment : any, idArticle:any) {
    this.articleService.addComments(comment,idArticle)
    .subscribe(()=> {
   this.articleService.getAllComments(idArticle)
 
      });
      
  }
  showpub() {
    this.articleService.pubWithInteract();
  }

  AddLoveArticle(likes:any ,idArticle:any){
  this.articleService.AddLoveArticle(likes,idArticle)
  .subscribe(res=> {
    console.log(res) }
    ,error =>{
      console.error(error)
    
  });
}
  AddLikeArticle(likes:any ,idArticle:any){
    this.articleService.AddLikeArticle(likes,idArticle)
    .subscribe(res=> {
      console.log(res) },error =>{
        console.error(error)
      
    });
  }   
  AddHahaArticle(likes:any ,idArticle:any){
    this.articleService.AddHahaArticle(likes,idArticle)
    .subscribe(res=> {
      console.log(res) },error =>{
        console.error(error)
      
    });
  }   
  AddSadArticle(likes:any ,idArticle:any){
    this.articleService.AddSadArticle(likes,idArticle)
    .subscribe(res=> {
      console.log(res) },error =>{
        console.error(error)
      
    });
}
AddAngryArticle(likes:any ,idArticle:any){
  this.articleService.AddAngryArticle(likes,idArticle)
    .subscribe(res=> {
      console.log(res) },error =>{
        console.error(error)
      
    });
}
AddWowArticle(likes:any ,idArticle:any){
  this.articleService.AddWowArticle(likes,idArticle)
    .subscribe(res=> {
      console.log(res) },error =>{
        console.error(error)
      
    }); 
}
AddLikeComment(like:any ,idcomment:any){
  this.articleService.AddLikeComment(like,idcomment)
    .subscribe(res=> {
      console.log(res) },error =>{
        console.error(error)
      
    }); 
}
AddDisLikeComment(like:any ,idcomment:any){
  this.articleService.AddDisLikeComment(like,idcomment)
    .subscribe(res=> {
      console.log(res) },error =>{
        console.error(error)
      
    }); 
}


}





