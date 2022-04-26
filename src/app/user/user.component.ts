import { Component, OnInit } from '@angular/core';
import { User } from '../module/user';
import { RateService } from '../rate-collaborator/rate.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user ! : User ; 
  listUsers :any;

  constructor( private userService : UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
    
    this.user= {
      id :null,
	    name:null,
	    Dob:null,
	    PhotoProfil:null ,
	    Headline:null , 
	    current_position:null,
	    education:null,
	   location:null,
	   contact_info:null,
	   experience:null,
	   points :null,
	   Role:null 
    };

  }

  getAllUsers(){
    this.userService.GetAllUsers().subscribe(res => this.listUsers=res)
  }

}
