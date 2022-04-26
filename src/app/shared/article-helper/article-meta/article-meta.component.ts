import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  styleUrls: ['./article-meta.component.css']
})
export class ArticleMetaComponent implements OnInit {

  @Input() subject: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
