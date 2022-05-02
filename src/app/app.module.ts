import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
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
  ProfileInfoComponent
 ],
 imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  HttpClientModule,
  MatButtonModule,
  MatMenuModule
 ],
 providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
 ],
 bootstrap: [AppComponent]
})
export class AppModule { }
