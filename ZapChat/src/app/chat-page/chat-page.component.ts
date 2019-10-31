import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, OnDestroy {
  public mobileNo: String;
  private sub: any;
  public messageNumber: String = '';
  public contactName:String='';
  public isContactListVisible:boolean = true;
  public userName:string = '';
  contactList: any[];

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute ) {
   
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.mobileNo = params['number'];
      console.log(this.mobileNo);
    });
  }
  
  // functions to toggle between add contacts and contact list
  setAddContacts(clicked: boolean) {
      this.isContactListVisible = false;
    }
  setContactList(clicked: boolean) {
    this.isContactListVisible = true;
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
