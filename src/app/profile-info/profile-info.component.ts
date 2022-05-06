import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  @Output() updated2 = new EventEmitter<boolean>();

  constructor() { }
  @Input () user:User;

   
  
  ngOnInit(): void {
    
  }
update2(value:boolean) {
    this.updated2.emit(value)
;
  }

}
