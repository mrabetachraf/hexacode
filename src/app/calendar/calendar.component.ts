import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';


import { EventService } from 'src/app/Shared/services/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent  {
  events: any=[];
  calendarOptions: CalendarOptions  ;
  
  
  

  constructor(private http:HttpClient, private eventservice:EventService) { }

  getcolors(){
    const colors=['#DEB887','#7FFF00','#8B0000',]
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    return randColor
  }
  ngOnInit(){

    this.eventservice.getCAlendar().subscribe( data => {
      
      this.events.push(data);
      
      
      
        });

      
   
    var i=0
    let map = new Map<string, string>();
    map.set("title", "tewt");
    map.set("start","this.events[0][1]")
    JSON.stringify(map) 
    console.log(map)
   setTimeout(() => {
    
      
      
    

   //full calendar setting and event binding
    this.calendarOptions = {
        initialView: 'dayGridMonth',
        
        //events: this.events[0][0]
        
        events: [
          
          { title: this.events[0][i][0], start: this.events[0][i][1],color:this.getcolors(),end:this.events[0][1][1]},
          
          { title: this.events[0][1][0], date: this.events[0][1][1] },
          { title: this.events[0][2][0], date: this.events[0][2][1] },
          { title: this.events[0][3][0], date: this.events[0][3][1] },
          
          
          

          

          
          
        ]
        
        
      };
      
      i++
      
    }, 1500);
    
  }
  

}



