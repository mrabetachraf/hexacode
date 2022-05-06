import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./shared/home/home.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuard } from "./auth/auth.guard";
import { TokenInterceptorService } from "./shared/services/token-interceptor.service";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { UserComponent } from 'src/app/user-group/user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
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
    HomeComponent,
  HeaderComponent,
  FooterComponent,
  SignupComponent,
  SigninComponent,
  UserComponent,
  PageNotFoundComponent,
  ProfileComponent,
  ForgetPasswordComponent,
  ResetPasswordComponent,
  ProfileInfoComponent,
  EditProfileComponent,
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

  ReactiveFormsModule,
 
 
  MatButtonModule,
  MatMenuModule

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
  providers: [  AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
