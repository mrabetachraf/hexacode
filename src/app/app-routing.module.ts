import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./shared/home/home.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { UserComponent } from "./user-group/user/user.component"
import { ProfileComponent } from "./profile/profile.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { HistoriqueComponent } from './historique/historique.component';
import { LevelComponent } from './level/level.component';
import { QuestionContentComponent } from './question-content/question-content.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  { path: "user-group/user", component: UserComponent },
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "forget_password", component: ForgetPasswordComponent },
  { path: "reset_password", component: ResetPasswordComponent },
  { path: "**", component: PageNotFoundComponent }
    { path: '', redirectTo: '/questions', pathMatch: 'full' },
  { path: 'history', component: HistoriqueComponent },
  {
   path: 'theme', component: ThemeComponent,
   children: [
   { path: 'quizz/:idLevel', component: QuizzComponent },
   { path: 'themeContent/:id', component: ThemeContentComponent },
 ],
},
{
 path: 'questions', component: QuestionsComponent,
 children: [
   {
     path: 'level/:id', component: LevelComponent,
     children: [
       { path: 'questionContent/:id', component: QuestionContentComponent },
     ],
   },
 ],
},


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
