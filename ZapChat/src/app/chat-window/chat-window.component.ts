import { Component, OnInit, NgZone, Input, SimpleChanges, OnDestroy  } from '@angular/core';
import { Chat } from '../models/chat';
import {AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticateUserService } from '../services/authenticate-user.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})

@Injectable({ providedIn: 'root' })
export class ChatWindowComponent implements OnInit {

  @Input() public mobileNo;
  @Input() public messageNumber;

  private chats: any[] = [];
  public chat: Chat;
  message: String = '';
  type: String = '';
  number:string;
  txtMessage:string;

  constructor(private db: AngularFireDatabase, private zone: NgZone, private router: Router, private route: ActivatedRoute, private authenticate: AuthenticateUserService) {
  }

  ngOnInit() {
   }

   //function to handle changes in input parameters
   ngOnChanges(changes: SimpleChanges) {
    this.db.list('/chat/' + this.mobileNo + '/contactList/' + this.messageNumber + '/chats')
    .valueChanges().subscribe(chat => {
      this.chats = chat;

    });
    this.resetUnreadCount(this.mobileNo, this.messageNumber);
  }

  //function to send message 
  sendMessage() {
    this.message =this.txtMessage;
    this.type = 'sent';
    if (this.sendingMessage(this.message, this.type, this.mobileNo, this.messageNumber)) {
      this.txtMessage = "";
    } else {
      alert('Message sending failed');
    }

  }

  //function to bind message data from api
  sendingMessage(message, type, senderNumber, receiverNumber) {
    this.authenticate.messageSent(message, type, senderNumber, receiverNumber).subscribe(chat => this.chat = chat);
    return true;
  }

  ngOnDestroy() {

  }

  //function to reset unread message count to 0
  resetUnreadCount(mobNumber,contactNumber){
    if(mobNumber != ""  && contactNumber.toString() != ""){
      this.authenticate.resetUnreadCount(mobNumber,contactNumber).subscribe(chat => this.chat = chat);
    }
   
  }
}
