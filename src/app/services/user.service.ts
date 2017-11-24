import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { user } from '../objects/user.class';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

    constructor(private _http: Http) {}

    domain:string = 'http://localhost:3333';     // http://localhost:3333 , https://cstoreapi.herokuapp.com

    isLoggedIn() {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/user/isauthenticated', options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    logoutfn(){
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/user/logout', options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    loginfn(username:string, password:string): Observable<any>{
        var headers = new Headers({'Content-Type':'application/X-www-form-urlencoded'});
        let options = new RequestOptions({
            headers: headers,
            withCredentials: true   //set to true to send cookie along with request
        });
        var creds = 'uname=' + username + '&password=' + password;
        return this._http.post(this.domain + '/user/authenticate', creds, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    signupfn(newUser: user) {
        var headers = new Headers({'Content-Type':'application/X-www-form-urlencoded'});
        let options = new RequestOptions({
            headers: headers,
            withCredentials: true   //set to true to send cookie along with request
        });
        //var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        var creds = 'fname=' + newUser.fname + '&lname=' + newUser.lname + '&email=' + newUser.email + '&uname=' + newUser.username + '&password=' + newUser.password;
        return this._http.post(this.domain + '/user/adduser', creds, options)
                .map( res => res.json())
                .catch(error => Observable.throw(error.json()));
    }

    getPurchaseHistory() {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/user/purchase_history', options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    changePassword(currentPw: string, newPw: string) {
        var headers = new Headers({'Content-Type':'application/X-www-form-urlencoded'});
        let options = new RequestOptions({
            headers: headers,
            withCredentials: true   //set to true to send cookie along with request
        });
        //var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        var creds = 'currentPassword=' + currentPw + '&newPassword=' + newPw;
        return this._http.post(this.domain + '/user/change_password', creds, options)
                .map( res => res.json())
                .catch(error => Observable.throw(error.json())); 
    }

    /*
    getUserName() {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/user/get_username', options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }
    */

    getCSRFToken() {
        return this._http.get(this.domain + '/user/csrfProtection')
        .map(res => res.json())
        .catch(error => Observable.throw(error.json()));
    }

}
