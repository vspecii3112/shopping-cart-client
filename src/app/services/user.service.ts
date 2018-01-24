import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { user } from '../objects/user.class';
import { Domain } from '../objects/domain.class';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

    constructor(private _http: HttpClient, private domain: Domain) {}

    isLoggedIn(): Observable<any> {
        return this._http.get(this.domain.url + '/user/isauthenticated', {withCredentials: true});
    }

    logoutfn(): Observable<any>{
        return this._http.get(this.domain.url + '/user/logout', {withCredentials: true});
    }

    loginfn(username:string, password:string): Observable<any>{
        var headers = new HttpHeaders({'Content-Type':'application/X-www-form-urlencoded'});
        var creds = 'uname=' + username + '&password=' + password;
        return this._http.post(this.domain.url + '/user/authenticate', creds, {headers: headers, withCredentials: true})
    }

    signupfn(newUser: user): Observable<any> {
        var headers = new HttpHeaders({'Content-Type':'application/X-www-form-urlencoded'});
        //var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        var creds = 'fname=' + newUser.fname + '&lname=' + newUser.lname + '&email=' + newUser.email + '&uname=' + newUser.username + '&password=' + newUser.password;
        return this._http.post(this.domain.url + '/user/adduser', creds, {headers: headers, withCredentials: true})
    }

    getPurchaseHistory(): Observable<any> {
        return this._http.get(this.domain.url + '/user/purchase_history', {withCredentials: true})
    }

    getOrderDetails(orderID: string): Observable<any> {
        return this._http.get(this.domain.url + '/user/order_details/' + orderID, {withCredentials: true})
    }

    changePassword(currentPw: string, newPw: string): Observable<any> {
        var headers = new HttpHeaders({'Content-Type':'application/X-www-form-urlencoded'});
        //var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        var creds = 'currentPassword=' + currentPw + '&newPassword=' + newPw;
        return this._http.post(this.domain.url + '/user/change_password', creds, {headers: headers, withCredentials: true})
    }

    forgotPassword(email: string): Observable<any> {
        let headers = new HttpHeaders({'Content-Type':'application/X-www-form-urlencoded'});
        let body = 'email=' + email;
        return this._http.post(this.domain.url + '/user/forgot_password', body, {headers: headers, withCredentials: true})
    }

    checkPwToken(token: string): Observable<any> {
        let headers = new HttpHeaders({'Content-Type':'application/X-www-form-urlencoded'});
        return this._http.get(this.domain.url + '/user/check_token/' + token, {headers: headers, withCredentials: true})
    }

    resetPassword(newPw: string, token: string): Observable<any> {
        let headers = new HttpHeaders({'Content-Type':'application/X-www-form-urlencoded'});
        let body = 'newPassword=' + newPw;
        return this._http.post(this.domain.url + '/user/reset_password/' + token, body, {headers: headers, withCredentials: true})
    }

    /*
    getCSRFToken() {
        return this._http.get(this.domain + '/user/csrfProtection')
        .catch(error => Observable.throw(error.json()));
    }
    */
}
