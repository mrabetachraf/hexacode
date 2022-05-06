import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { OfferComponentComponent } from './offer-component/offer-component.component';
import { RateCollaboratorComponent } from './rate-collaborator/rate-collaborator.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './template/home/home.component';
const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'offer/add', component : OfferComponentComponent},
  {path : 'collaborator/add', component : CollaboratorComponent},
  {path : 'collaborator/rate', component : RateCollaboratorComponent},
  {path : 'reservation/add' , component : ReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
