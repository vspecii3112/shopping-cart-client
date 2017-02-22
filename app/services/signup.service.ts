import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SignupService {

    constructor(private _http:Http) {}

    signupfn(usercreds) {
        var headers = new Headers();
        var creds = 'fname=' + usercreds.fname + '&lname=' + usercreds.lname + '&email=' + usercreds.email + '&uname=' + usercreds.username + '&password=' + usercreds.password;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._http.post('http://localhost:3333/adduser', creds, {headers: headers})
                .map( res => res.json())
                .catch(error => Observable.throw(error.json()));
    }
}