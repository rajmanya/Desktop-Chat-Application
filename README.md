# ZapChat - Chat Application for desktop

## Overview  
We have created a web-chat application for desktop. This application has various functionalities like registration, login, one to one chatting, add contacts, etc. We have used *Firebase Real-time Database for database and data synchronization*.

## Requirements
- Angular
- NodeJS
- AngularFire2
- Firebase Real-time database

## How to run
1) Clone the repository or download the zip file. Open the terminal and install node modules. Execute following commands to resolve dependencies
    - *npm install*
    - *npm install firebase-admin --save*
    - *npm install --save firebase*
    - *npm install angularfire2 --save*
    - *npm install --save express*
    - *npm install --save body-parser*
    
    
2) To start Zapchat Server, run command *npm start*
3) To start Zapchat application, run command *ng serve --open*
You will be redirected to the browser.

## User Stories
1) As a user, I should be able to see a login screen when i hit the url for chat application.

2) As a user, I should be able to login to user account with number and password.

3) As a new user, I should be able to see new user registration link on login screen and on click of link,I should be able to see a registration screen

4) As a user, I should be able to register as a new user with my details.

5) As a user, I should be able to see proper validation messages when entered mobile number and password is incorrect.

6) As a user, I should be able to see a list of my contacts who are available so that I can start 1:1 chat with anyone of them. 

7) As a user, I should be able to see list of all my chat threads on the left side of the screen.

8) As a user, I should be able to see chat history when i click on the name of the person from left chat thread.

9) As a user, I should be able to clearly distingush the sent and received messgaes of a perticular chat.

10) As a user, I should be able to see my latest chat on the bottom of the screen.

11) As a user, I should be able to scroll to up in chat in order to see old chat history.

12) As a user, I should get notification on name of the chat when new messages comes from that number.

13) As a user, when I read the newly received messages, notification icon should gets disappered.

14) As a user, I should be able to see an icon to add new contacts at the top left of the screen.

15) As a user, I should be able to see a pop-up when i click on the add new contact icon, asking for name and mobile number of new contact.

16) As a user, I should be able to see newly added contact in the chat pool after adding contact.

17) As a user, I should be able to see a text field to type messages at the bottom of the chat.


## Model Design

<img src="https://github.com/neu-mis-info6150-fall-2018/final-project-thewolfpack/blob/master/Chat_Model_Design.svg" >
