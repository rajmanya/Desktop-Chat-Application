import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDetails } from '../models/loginDetails';
import { UserDetails } from '../models/UserDetails';
import { Chat } from '../models/chat';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {
public loginDetails: LoginDetails;
public userDetails: UserDetails;
public chat: Chat;
  constructor(private http: HttpClient) {

   }

   //function to call /login api
   loginAuthenticate (loginId, password): Observable<LoginDetails> {
    this.loginDetails = new LoginDetails();
    this.loginDetails.phoneNumber = loginId;
    this.loginDetails.password = password;

    return this.http.post<LoginDetails>('http://localhost:3000/user/login/', this.loginDetails)
    .pipe();
   }

   //function to call userExist api
   userExist (phoneNumber, password, firstName): Observable<UserDetails> {
    this.userDetails = new UserDetails();
    this.userDetails.phoneNumber = phoneNumber;
    this.userDetails.password = password;
    this.userDetails.firstName = firstName;

    return this.http.post<UserDetails>('http://localhost:3000/user/', this.userDetails)
    .pipe();
   }

   //function to call sencMessage api
   messageSent (message, type, senderNumber, receiverNumber): Observable<Chat> {
    this.chat = new Chat();
    this.chat.message = message;
    this.chat.senderNumber = senderNumber;
    this.chat.receiverNumber = receiverNumber;

    return this.http.post<Chat>('http://localhost:3000/user/sendMessage', this.chat)
    .pipe();
   }

   //function to call reset unread counter api
   resetUnreadCount (mobNumber, contactNumber): Observable<Chat> {
    this.chat = new Chat();
    this.chat.message = "set unread to 0";
    this.chat.senderNumber = mobNumber;
    this.chat.receiverNumber = contactNumber;

    return this.http.put<Chat>('http://localhost:3000/user/unreadMessages', this.chat)
    .pipe();
   }




  }
