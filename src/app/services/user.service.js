"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
//import 'rxjs/add/observable/throw';
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
//import 'rxjs/add/operator/retry';
//import 'rxjs/add/operator/timeout';
//import 'rxjs/add/operator/delay';
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.isLoggedIn = function () {
        var options = new http_1.RequestOptions({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/user/isauthenticated', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    UserService.prototype.logoutfn = function () {
        var options = new http_1.RequestOptions({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/user/logout', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    UserService.prototype.loginfn = function (usercreds) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var options = new http_1.RequestOptions({
            headers: headers,
            withCredentials: true //set to true to send cookie along with request
        });
        var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        return this._http.post('http://localhost:3333/user/authenticate', creds, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    UserService.prototype.signupfn = function (usercreds) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var options = new http_1.RequestOptions({
            headers: headers,
            withCredentials: true //set to true to send cookie along with request
        });
        //var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        var creds = 'fname=' + usercreds.fname + '&lname=' + usercreds.lname + '&email=' + usercreds.email + '&uname=' + usercreds.username + '&password=' + usercreds.password;
        return this._http.post('http://localhost:3333/user/adduser', creds, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    UserService.prototype.getPurchaseHistory = function () {
        var options = new http_1.RequestOptions({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/user/purchase_history', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map