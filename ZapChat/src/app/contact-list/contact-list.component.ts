import { Component, OnInit , Input,EventEmitter,Output,AfterContentInit} from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import {ChatWindowComponent} from '../chat-window/chat-window.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit{

  @Input() public mobileNo;
  @Output() public childEvent = new EventEmitter();
  @Output() public contactName = new EventEmitter();
  contactList: any[];
  @ViewChild(ChatWindowComponent) chatWindowComponent: ChatWindowComponent;

  constructor(private db: AngularFireDatabase,private router: Router, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    
    this.db.list('/chat/'+this.mobileNo+'/contactList/')
    .valueChanges().subscribe(contact => {
      this.contactList = contact;

    });
  }
  
// Show messages for the number
  showMessages(number,name) {
    this.childEvent.emit(number);
    this.contactName.emit(name);
  }


}
