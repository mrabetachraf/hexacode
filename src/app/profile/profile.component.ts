import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "src/app/shared/models/user.model"
import { UserService } from "src/app/shared/services/user.service"
import { Badge } from '../shared/models/badge';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
not_updating = true;
user : User;
badge: Badge;
test:string;
quotient:number
formGroup: FormGroup;
constructor(private formBuilder: FormBuilder,
  private userService: UserService
) { }

  ngOnInit(): void {
    this.not_updating;
    this.getUserByName().subscribe(user => {
      this.user = user;
      
   
  });
  
  this.getBadge().subscribe(badge => {
    this.badge = badge;

    console.log( badge.maxpoints)
    console.log( "the max points are ")
 
});
  }

  getUserByName() {
    return this.userService.getUserByName(localStorage.getItem('user_name'));
}
  update(newItem: boolean) {
    this.not_updating= newItem ; 
  }
  getBadge(){
    return this.userService.addBadgeToUser(localStorage.getItem('user_name'));
  }


}
