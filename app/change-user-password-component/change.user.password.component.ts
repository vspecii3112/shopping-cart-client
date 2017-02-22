import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HeaderComponent } from '../header-component/header.component';
import { ChangeUserPasswordService } from '../services/change.user.password.service';

@Component({
  templateUrl: 'app/change-user-password-component/change.user.password.component.html'
})

export class ChangeUserPasswordComponent implements OnInit{
  
  public changeUserPasswordForm: FormGroup; // Our model driven form

  constructor(private changeuserpassword: ChangeUserPasswordService, private _fb: FormBuilder) {
  }

  ngOnInit(){
    this.changeUserPasswordForm = this._fb.group({
      'oldPassword': [''],
      'newPassword': [''],
      'retypePassword': ['']
    });

  }

  modifyUserPassword() {

  }

}