import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoriqueComponent } from './historique/historique.component';
import { AppRoutingModule } from './app-routing.module';
import { QuizzComponent } from './quizz/quizz.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionContentComponent } from './question-content/question-content.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { LevelComponent } from './level/level.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import { AddLevelComponent } from './level/add-level/add-level.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent,
    HistoriqueComponent,
    QuizzComponent,
    ThemeComponent,
    ThemeContentComponent,
    QuestionsComponent,
    QuestionContentComponent,
    AddThemeComponent,
    LevelComponent,
    AddLevelComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
  entryComponents: [
    AddQuestionComponent,
    AddThemeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
