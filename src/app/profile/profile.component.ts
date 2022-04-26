import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "src/app/shared/models/user.model"
import { UserService } from "src/app/shared/services/user.service"


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user : User;
formGroup: FormGroup;
constructor(private formBuilder: FormBuilder,
  private userService: UserService
) { }

  ngOnInit(): void {
    this.getUserByName().subscribe(user => {
      this.user = user;
  });

  }

  getUserByName() {
    return this.userService.getUserByName(localStorage.getItem('user_name'));
}


}
