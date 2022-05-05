import { Component, OnInit } from '@angular/core';
import { FeedService } from '../shared/Service/feed.service';
import { Article } from '../shared/Model/article';
import { User } from '../shared/Model/user';
import { Departement } from '../shared/Model/departement';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  cheminImage = "assets/img/LOGO.jpg";
  listArticles : any; 
  articles!:Article;
  title:string = '';
  text:string = '';
  users:number[] =[1,2,3,4];
  user!:User[];
  dep!:Departement[];
  pub!:Article[];
  paramurl:any;

  constructor(private feedService :FeedService) { }

  ngOnInit(): void {
   
  }
  getAllArticles(){
    this.feedService.getAllArticles().subscribe(res => {
      this.listArticles= res});
   
  }
  
  addpub(){
 
   this.feedService.getListArticleTr().subscribe(res=>  this.listArticles = res);
    

  }
}
