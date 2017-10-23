import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  signupUser = {
    fname: '',
    lname: '',
    email: '',
    username: '',
    password: ''
  }

  constructor (private signupserv: UserService, private _router: Router, private route: ActivatedRoute) {

  }

  signup() {
    this.signupserv.signupfn(this.signupUser)
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