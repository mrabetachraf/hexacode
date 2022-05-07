import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/shared/services/user.service"

import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  edited_user: User;
  hasError: boolean;
  formGroup: FormGroup;
  submitted: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }
  @Input () user:User;
  @Output() updated = new EventEmitter<boolean>();
  ngOnInit() {
    this.hasError = false;
    this.submitted = false;
    this.formGroup = this.formBuilder.group({
      name: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      username: ["", [Validators.required]],
   
      email: ["", [Validators.required]],
      contact_info: ["", [Validators.required]],
      education: ["", [Validators.required]],
      location: ["", [Validators.required]],
      id: ["", [Validators.required]],
      points: ["", [Validators.required]],
      headline: ["", [Validators.required]],

    });
  }

  edit(form: FormGroup) {
    if (!this.formGroup.valid) {
      this.hasError = true;
      return;
    }
    return this.userService.updateUser(form.value).subscribe((res) => {
      this.submitted = true;
      console.log("updating")
      console.log(res);

    
       });
    }
    update(value:boolean) {
      this.updated.emit(value)
;
    }
  }


