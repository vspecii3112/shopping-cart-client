import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HeaderComponent } from '../header-component/header.component';
import { SignupService } from '../services/signup.service';

@Component({
  templateUrl: 'app/signup-component/signup.component.html'
})

export class SignupComponent {
  signupUser = {
    fname: '',
    lname: '',
    email: '',
    username: '',
    password: ''
  }

  constructor (private signupserv: SignupService, private _router: Router, private route: ActivatedRoute) {

  }

  signup() {
    this.signupserv.signupfn(this.signupUser)
      .subscribe( data => {
        if(data.success) {
          this._router.navigate(['/signup_complete']);
        }
      },
      err => {
        console.log(err.msg);
      },
      () => console.log('signup complete')
    )
  }
}
