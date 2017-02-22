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
export class AuthService {

    constructor(private _http:Http) {}

    loginfn(usercreds){
        var headers = new Headers();
        var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._http.post('http://localhost:3333/authenticate', creds, {headers: headers})
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    /*loginfn(usercreds) {
        var headers = new Headers();
        var creds = 'name=' + usercreds.username + '&password=' + usercreds.password;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Observable((observer)=>{
            this._http.post('http://localhost:3333/authenticate', creds, {headers: headers})
                .subscribe(
                    (data)=>{
                        if(data.json().success) {
                            window.localStorage.setItem('auth_key', data.json().token);
                            this.isLoggedin = true;
                            observer.next(this.isLoggedin);
                        }
                
                })
        })

    } */

}