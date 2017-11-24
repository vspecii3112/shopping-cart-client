import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  constructor (private authenticate: UserService, private _router: Router) {

  }

  username: string = '';
  password: string = '';

  errorMsg: string = '';

  ngOnInit() {
  }

  login() {
    this.authenticate.loginfn(this.username, this.password)
        .subscribe(data => {
          if(data.redirect) {
            console.log(data.msg);
            this._router.navigate([data.redirect]);
          }
        },
        err => {
          console.log(err.msg);
          this.errorMsg = err.msg;
        },
        () => console.log('login complete')
      )
  }
}
