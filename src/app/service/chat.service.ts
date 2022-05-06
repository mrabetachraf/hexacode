import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Message } from '../Model/message';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
webSocket!:WebSocket;
message:Message[]=[];

  constructor(private http: HttpClient) { }

public openWebSocket(){
this.webSocket = new WebSocket('ws://localhost:8086/chat');
this.webSocket.onopen = (event) => {
  console.log('open:',event);
};
this.webSocket.onmessage= (event) =>{
const message = JSON.parse(event.data);
this.message.push(message);
};
this.webSocket.onclose=(event)=>{
  console.log('close:',event);
};
}
 public sendMessage(message:Message){
 this.webSocket.send(JSON.stringify(message));

 }
 public closeWebSocket(){
   this.webSocket.close();
 }
}
