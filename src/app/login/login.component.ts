import { Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  loginUser = {
    username: '',
    password: ''
  }

  constructor (private authenticate: UserService, private _router: Router, private route: ActivatedRoute) {

  }

  loginMsg: String = '';

  login() {
    this.authenticate.loginfn(this.loginUser)
        .subscribe(data => {
          if(data.redirect) {
            console.log(data.msg);
            this._router.navigate([data.redirect]);
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