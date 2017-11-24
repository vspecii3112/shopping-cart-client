import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-change-user-password',
  templateUrl: './change-user-password.component.html',
  styleUrls: ['./change-user-password.component.css']
})
export class ChangeUserPasswordComponent implements OnInit {

  errorMsg: string = '';
  currentPw: string = '';
  newPw: string = '';
  confirmNewPw: string = '';

  constructor (private _userService: UserService, private _router: Router) {
    
      }

  ngOnInit() {
  }

  changePw() {
    if (this.newPw !== this.confirmNewPw) {
      this.errorMsg = 'Confirm passwords do not match';
      this.newPw = '';
      this.confirmNewPw = '';
    }
    else {
      this._userService.changePassword(this.currentPw, this.newPw)
        .subscribe(data => {
          console.log(data.user);
        },
        err => {
          console.log(err.msg);
        },
        () => console.log('update password complete')
      )
    } 
    /*
    this._userService.changePassword(this.credentials)
        .subscribe(data => {
          if(data.redirect) {
            console.log(data.msg);
          }
        },
        err => {
          console.log(err.msg);
          this.loginMsg = err.msg;
        },
        () => console.log('change password complete')
      )
      */
  }
}

