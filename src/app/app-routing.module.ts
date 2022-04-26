import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./shared/home/home.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { UserComponent } from "./user-group/user/user.component"
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
    { path: "user-group/user", component: UserComponent },
    { path: "", pathMatch: "full", redirectTo: "/home" },
    { path: "home", component: HomeComponent },
    { path: "profile", component: ProfileComponent },
    { path: "signin", component: SigninComponent },
    { path: "signup", component: SignupComponent },
    { path: "**", component: PageNotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
    
export class AppRoutingModule { }
