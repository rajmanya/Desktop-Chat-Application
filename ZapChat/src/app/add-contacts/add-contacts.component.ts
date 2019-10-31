import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { AddContact } from '../models/addContact';
import {AddContactService} from '../services/add-contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss']
})
export class AddContactsComponent implements OnInit {
  @Input() public mobileNo;
  @Output() public hideAddContactEvent = new EventEmitter();

  addContact: AddContact;
  phoneNumber: String = '';
  name: String = '';
  isValid: boolean = false;
  contactNumber: String = '';
  constructor( private add: AddContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  //function to add contact to contactList
  onClickAdd() {
    this.addContact = new AddContact();
    this.validate();

      if (this.validate() && this.checkAddContact(this.addContact.newContact, this.addContact.firstName, this.addContact.phoneNumber)) {
        setTimeout(() => {
          if (this.addContact) {
          this.hideAddContactComponent() 
        } else {
          alert('Something went wrong. Please try again!');
          }
        }, 500);
      }
    }

  validate() {
    // validation function for adding contact
    let newContact = document.forms['addContact']['newContact'].value;
    let name = document.forms['addContact']['name'].value;

    if (newContact === '') {
      alert('please enter Phone Number');
      return false;
    } else {
      this.addContact.newContact = newContact;
    }

    if (name === '') {
      alert('please enter Contact Name');
      return false;
    } else {
      this.addContact.firstName = name;
      this.addContact.phoneNumber = this.mobileNo;
    }

    return true;
}

//function to bind contact data
checkAddContact(contactNumber, name, phoneNumber) {
  this.add.addContactAuthenticate(contactNumber, name, phoneNumber).subscribe(addContact => this.addContact = addContact);
  return true;
}

// funtion to hide add contact component via event emitter
hideAddContactComponent(){
  this.hideAddContactEvent.emit(true);
}
}
