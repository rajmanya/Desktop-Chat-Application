import { AddContact } from '../models/addContact';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AddContactService {
public addContact: AddContact;
  constructor(private http: HttpClient) { }

  //function to call /addContact api
  addContactAuthenticate (contactNumber, name, phoneNumber): Observable<AddContact> {
    this.addContact = new AddContact();
    this.addContact.phoneNumber = phoneNumber;
    this.addContact.firstName = name;
    this.addContact.newContact = contactNumber;

    return this.http.post<AddContact>('http://localhost:3000/user/addContact/', this.addContact)
    .pipe();
   }
}
