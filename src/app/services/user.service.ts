import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/retry';
//import 'rxjs/add/operator/timeout';
//import 'rxjs/add/operator/delay';

@Injectable()
export class UserService {

    constructor(private _http: Http) {}

    isLoggedIn() {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });

        return this._http.get('http://localhost:3333/user/isauthenticated', options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    logoutfn(){
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/user/logout', options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    loginfn(usercreds:any){
        var headers = new Headers({'Content-Type':'application/X-www-form-urlencoded'});
        let options = new RequestOptions({
            headers: headers,
            withCredentials: true   //set to true to send cookie along with request
        });
        var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        return this._http.post('http://localhost:3333/user/authenticate', creds, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    signupfn(usercreds:any) {
        var headers = new Headers({'Content-Type':'application/X-www-form-urlencoded'});
        let options = new RequestOptions({
            headers: headers,
            withCredentials: true   //set to true to send cookie along with request
        });
        //var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        var creds = 'fname=' + usercreds.fname + '&lname=' + usercreds.lname + '&email=' + usercreds.email + '&uname=' + usercreds.username + '&password=' + usercreds.password;
        return this._http.post('http://localhost:3333/user/adduser', creds, options)
                .map( res => res.json())
                .catch(error => Observable.throw(error.json()));
    }

    getPurchaseHistory() {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/user/purchase_history', options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

}