import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot-user-password',
  templateUrl: './forgot-user-password.component.html',
  styleUrls: ['./forgot-user-password.component.css']
})
export class ForgotUserPasswordComponent implements OnInit {

  private forgotPwForm: FormGroup;
  private emailMsg: string = "";
  private errorMsg: string = "";
  private successMsg: string = "";

  constructor(private userService: UserService, private _router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.forgotPwForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    });
  }

  clearMsg() {
    this.emailMsg = "";
    this.errorMsg = "";
    this.successMsg = "";
  }

  resetPassword(_forgotPwForm: any) {
    this.clearMsg();
    console.log(_forgotPwForm);
    if (_forgotPwForm.controls.email.errors) {
      if (_forgotPwForm.controls.email.errors.required) {
        this.emailMsg = "Email is required";
      }
      else {
        this.emailMsg = "Invalid email address";
      }
    }
    else {
      this.userService.forgotPassword(_forgotPwForm.value.email)
      .subscribe(data => {
        console.log(data);
        this.successMsg = "An email has been sent to " + _forgotPwForm.value.email + " to reset your password";
        this.forgotPwForm.reset();
      },
      err => {
        this.errorMsg = err.error.msg;
      },
      () => console.log('reset password submitted')
      )
    }

  }

}
