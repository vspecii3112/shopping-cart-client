import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../services/user.service';
import { user } from '../objects/user.class';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  newUser: user = {
    fname: '',
    lname: '',
    email: '',
    username: '',
    password: ''
  }

  constructor (private _userService: UserService, private _router: Router) {

  }

  signup() {
    this._userService.signupfn(this.newUser)
      .subscribe( (data:any) => {
        if(data.redirect) {
          console.log('signup is success');
          console.log(data.msg);
          this._router.navigate([data.redirect]);
        }
      },
      (err:any) => {
        console.log(err.msg);
      },
      () => console.log('signup complete')
    )
  }
}