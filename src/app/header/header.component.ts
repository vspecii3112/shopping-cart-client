import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
    constructor(private UserAuthentication: UserService, private UserLogout: UserService,  private _router: Router) {
    }
  
    ngOnInit(){
      this.checkAuthentication();
    }
  
    loggedIn: boolean = false;
  
    @Input() totalQuantity: number;   //gets the total quantity from the parent(hompage.component.ts)
  
    checkAuthentication(){
      this.UserAuthentication.isLoggedIn()
        .subscribe(data => {
          if(data.msg) {
            console.log('logged in');
            this.loggedIn = true;
          }
          else {
            console.log('not logged in')
            this.loggedIn = false;
          }
        },
          err => {
            console.log(err.msg);
          },
          () => console.log('authentication complete')
        )
    }
  
    userLogout(){
      this.UserLogout.logoutfn()
        .subscribe(
          data => {
              console.log(data.msg);
              this.checkAuthentication();   //Checks the authentication of the user to get the latest update so that Angular will re-render the page when it reloads the same URL.
              this._router.navigate(['/home']);
          },
          err => console.log('error logging out'),
          () => console.log('logout complete')
        )
    }
  
  }
