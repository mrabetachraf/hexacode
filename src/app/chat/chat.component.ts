import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from '../shared/Model/message';
import { ChatService } from '../shared/Service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit ,OnDestroy{

  constructor(public chatservice:ChatService ) { }
 

  ngOnInit(): void {
    this.chatservice.openWebSocket();
  }
  ngOnDestroy(): void {
  this.chatservice.closeWebSocket();
  }
sendMessage(sendForm:NgForm){
  const messages = new Message(sendForm.value.sender, sendForm.value.contenu);
 this.chatservice.sendMessage(messages);
 sendForm.controls.contenu.reset();
}
}
