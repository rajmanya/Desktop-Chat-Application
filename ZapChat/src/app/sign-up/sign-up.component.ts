import { UserDetails } from '../models/UserDetails';
import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from '../services/authenticate-user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    public userDetails: UserDetails;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    phoneNumber: string = '';
    password: string = '';
    passwordRepeat: string = '';
    isUserExist: boolean = false;
    isValid: boolean = true;

    constructor(private authenticate: AuthenticateUserService, private router: Router, private route: ActivatedRoute,) {
    }

    ngOnInit() {
    }

  onSignUp() {
    this.validate();
    this.userDetails = new UserDetails();
    this.userDetails.isUserExist = true;
    this.userDetails.firstName = this.firstName;
    this.userDetails.lastName = this.lastName;
    this.userDetails.email = this.email;
    this.userDetails.phoneNumber = this.phoneNumber;
    this.userDetails.password = this.password;

    if (this.isValid) {
      // Checking if the user already exists or not
        this.checkUserExist(this.phoneNumber, this.password, this.firstName, this.router ,
            function(data, number, router) {
                if (data) {
                    alert('User already exists');
                } else {
                    router.navigate(['chatPage', number]);
                }
            }
        );
    }
  }

  // Validation Function
  validate() {
    // Validation of all the fields of form using regex
    const firstName = document.forms['sign-up-form']['firstName'].value;
    const firstNameRegex = /^[a-zA-Z0-9]{3,30}$/;
    const firstNameResult = firstNameRegex.test(firstName);
    this.firstName = firstName;
    if (!firstNameResult) {
        alert('The First Name should be an Alpha-Numeric Character and the length of the field should be between 3 and 30 characters');
        this.isValid = false;
    }
    const lastName = document.forms['sign-up-form']['lastName'].value;
    const lastNameRegex = /^[a-zA-Z0-9]{3,30}$/;
    const lastNameResult = lastNameRegex.test(lastName);
    this.lastName = lastName;
    if (!lastNameResult) {
        alert('The Last Name should be an Alpha-Numeric Character and the length of the field should be between 3 and 30 characters');
        this.isValid = false;
    }
    const phoneNumber = document.forms['sign-up-form']['phoneNumber'].value;
    const phoneNumberRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    const phoneNumberResult = phoneNumberRegex.test(phoneNumber);
    this.phoneNumber = phoneNumber;
    if (!phoneNumberResult) {
        alert('The Phone Number is not valid');
        this.isValid = false;
    }
    const emailAddress = document.forms['sign-up-form']['email'].value;
    const emailAddressRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailAddressResult = emailAddressRegex.test(emailAddress);
    this.email = emailAddress;
    if (!emailAddressResult) {
        alert('The Email Address is not valid');
        this.isValid = false;
    }

    const password = document.forms['sign-up-form']['password'].value;
    const passwordRegex = /^[a-zA-Z0-9!@#\$%\^&\*]{8,}$/;
    const passwordResult = passwordRegex.test(password);
    this.password = password;
    if (!passwordResult) {
        alert('The Password is not valid');
        this.isValid = false;
    }
    const repeatPassword = document.forms['sign-up-form']['passwordRepeat'].value;
    const repeatPasswordResult = repeatPassword === password;
    if (!repeatPasswordResult) {
        alert('The Passwords do not match');
        this.isValid = false;
    }
    return this.isValid;
  }

  //function to bind data from signup api
  checkUserExist(phoneNumber, password, firstName, router , callback) {
    this.authenticate.userExist(phoneNumber, password, firstName)
    .subscribe(userDetails => this.userDetails = userDetails,
        );
        setTimeout(() => {
            callback( this.userDetails.isUserExist, this.userDetails.phoneNumber, router);
        }, 500);
  }
}
