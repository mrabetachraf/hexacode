import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HomeComponent } from './template/home/home.component';
import { ArticleListComponent } from './shared/article-helper/article-list/article-list.component';
import { ArticleMetaComponent } from './shared/article-helper/article-meta/article-meta.component';
import { ArticleDetaiilComponent } from './article-detaiil/article-detaiil.component';
import { HttpClientModule } from '@angular/common/http';
import { AddArticleComponent } from './add-article/add-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDialogComponent } from './modal/add-dialog/add-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDialogResComponent } from './modal/add-dialog-res/add-dialog-res.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleListComponent,
    ArticleMetaComponent,
    ArticleDetaiilComponent,
    AddArticleComponent,
    AddDialogComponent,
    AddDialogResComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
