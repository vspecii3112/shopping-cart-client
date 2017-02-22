import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HeaderComponent } from '../header-component/header.component';
import { AuthService } from '../services/auth.service';
//import login = require('../globals/globals');

@Component({
  templateUrl: 'app/login-component/login.component.html'
})

export class LoginComponent {
  loginUser = {
    username: '',
    password: ''
  }

  constructor (private authenticate: AuthService, private _router: Router, private route: ActivatedRoute) {

  }

  loginMsg: String = '';

  login() {
    this.authenticate.loginfn(this.loginUser)
        .subscribe(data => {
          if(data.success) {
            window.sessionStorage.setItem('auth_key', data.token);
            this._router.navigate(['/home']);
          }
        },
        err => {
          console.log(err.msg);
          this.loginMsg = err.msg;
        },
        () => console.log('login complete')
      )
  }
}
