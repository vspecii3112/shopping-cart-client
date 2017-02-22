import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';


@Injectable()
export class LoadUserInfoService {

    constructor(private _http: Http) {}

    getUser() {
        let authToken = window.sessionStorage.getItem('auth_key');    // getting the jwt stored in localStorage
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + authToken);     // sending the authToken as an Authorization header
        return this._http.get('http://localhost:3333/getinfo', {headers: headers})
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    displayUser(userName: String) {
        var headers = new Headers();
        var creds = 'uname=' + userName;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._http.post('http://localhost:3333/getUserInfo', creds, {headers: headers})
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    modifyUser(userName: String, userInfo) {
        var headers = new Headers();
        var creds = 'uname=' + userName + '&fname=' + userInfo.firstName + '&lname=' + userInfo.lastName + '&email=' + userInfo.email;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._http.put('http://localhost:3333/modifyUserInfo', creds, {headers: headers})
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));

    }

}