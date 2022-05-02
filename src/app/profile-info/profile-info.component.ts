import { Component, OnInit,Input } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  constructor() { }
  @Input () user:User;
  @Input() lastname: string;
  @Input() username: string;
  @Input() email: string;
  @Input() education: string;
  @Input() location: string;
  @Input() contact_info: string;
   
  
  ngOnInit(): void {
    
  }

}
