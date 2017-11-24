import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RouteService implements CanActivate{

  domain:string = 'http://localhost:3333';     // http://localhost:3333 , https://cstoreapi.herokuapp.com
  
  //isLoggedIn:boolean = false;

  constructor(private _userService: UserService, private _router: Router) {
    }

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
      return this._userService.isLoggedIn().map(res => {
          if (res.msg) {
            //if user is logged in
            return true;
          }
          else {
            //if user is not logged in
            this._router.navigate(['/login']);
            return false;
          }
      }).catch(() => {
          this._router.navigate(['/login']);
          return Observable.of(false);
      });
  }   

}
