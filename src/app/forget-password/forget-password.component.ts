import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "src/app/shared/models/user.model";
import { AuthService } from "src/app/shared/services/auth.service";
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  hasError: boolean;
  formGroup: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

    ngOnInit(): void {
      this.hasError = false;
      this.formGroup = this.formBuilder.group({
        username: ["", [Validators.required]],
       
      });
    }
    forgetPassword(form: FormGroup): void {
      if (!this.formGroup.valid) {
        this.hasError = true;
        return;
      }
      this.authService.forgetpassword(form.value).subscribe((res) => {
     
      
        this.router.navigate(["/"]).then(() => {
          window.location.reload();
        });
      });
    }  

}
