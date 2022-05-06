import { Component, OnInit } from '@angular/core';
import { EventService } from '../Shared/services/event.service';

@Component({
  selector: 'app-event-user',
  templateUrl: './event-user.component.html',
  styleUrls: ['./event-user.component.css']
})
export class EventUserComponent implements OnInit {
  public data : any = [];
  rating = 0;
  starCount = 5;
  ratingArr: boolean[] = []; 

  constructor(private eventservice :EventService) {this.ratingArr = Array(this.starCount).fill(false); }

  ngOnInit(): void {
   this.getAllEvents()
   
  }
  getAllEvents(){
    this.eventservice.getAllEvents()
    .subscribe({
      next:(res)=>{
        this.data = res;
        console.log(this.data)
        
        }})
  }

  onClick(i: number) {
    this.rating = i + 1;
    console.log(this.rating)

    };
    returnStar(i: number) {
      if (this.rating >= i + 1) {
        return 'star';
      } else {
        return 'star_border';
      }
    }

    

}
