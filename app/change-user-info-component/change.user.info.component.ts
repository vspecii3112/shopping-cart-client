import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HeaderComponent } from '../header-component/header.component';
import { LoadUserInfoService } from '../services/load.user.info.service';

@Component({
  templateUrl: 'app/change-user-info-component/change.user.info.component.html'
})

export class ChangeUserInfoComponent implements OnInit{
  
  public changeUserInfoForm: FormGroup; // Our model driven form

  constructor(private loaduserinfo: LoadUserInfoService, private _fb: FormBuilder) {
  }
  
  uName: String = '';

  ngOnInit(){
    this.changeUserInfoForm = this._fb.group({
      'firstName': [''],
      'lastName': [''],
      'email': ['']
    });

    this.getUserInfo();
  }

  getUserInfo() {
    // the getUser() function will get the current username that is logged in and then calls the displayUserInfo() to extract the user info from the mongoDB using the username
    this.loaduserinfo.getUser()
      .subscribe(
        data => {
          this.displayUserInfo(data.username)   // uses the username and calls the displayUserInfo() function to extract and display the user info
        },
        err => console.log(err.msg),
        () => console.log('getUserInfo complete')
      )
  }

  displayUserInfo(userName: String) {
    this.loaduserinfo.displayUser(userName)
      .subscribe(
        data => {
          this.changeUserInfoForm.setValue({firstName: data.firstName, lastName: data.lastName, email: data.userEmail});  // sets the value to the form fields
        },
        err => console.log(err.msg),
        ()=> console.log('displayUserInfo complete')
      )
  }

  modifyUserInfo() {

    this.loaduserinfo.getUser()
      .subscribe(
        data => {
          this.uName = data.username;
          this.loaduserinfo.modifyUser(this.uName, this.changeUserInfoForm.value)
            .subscribe(
              datas => console.log(datas.msg),
              err => console.log(err.msg),
              () => console.log('data received')
            )        
        },
        err => console.log(err.msg),
        () => console.log('getuserInfo complete')
      )
  }

}