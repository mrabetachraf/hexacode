import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriqueComponent } from './historique/historique.component';
import { LevelComponent } from './level/level.component';
import { QuestionContentComponent } from './question-content/question-content.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { ThemeComponent } from './theme/theme.component';
const routes: Routes = [
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
