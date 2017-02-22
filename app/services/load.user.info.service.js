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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
//import 'rxjs/add/observable/throw';
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/retry');
require('rxjs/add/operator/timeout');
require('rxjs/add/operator/delay');
var LoadUserInfoService = (function () {
    function LoadUserInfoService(_http) {
        this._http = _http;
    }
    LoadUserInfoService.prototype.getUser = function () {
        var authToken = window.sessionStorage.getItem('auth_key'); // getting the jwt stored in localStorage
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + authToken); // sending the authToken as an Authorization header
        return this._http.get('http://localhost:3333/getinfo', { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    LoadUserInfoService.prototype.displayUser = function (userName) {
        var headers = new http_1.Headers();
        var creds = 'uname=' + userName;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._http.post('http://localhost:3333/getUserInfo', creds, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    LoadUserInfoService.prototype.modifyUser = function (userName, userInfo) {
        var headers = new http_1.Headers();
        var creds = 'uname=' + userName + '&fname=' + userInfo.firstName + '&lname=' + userInfo.lastName + '&email=' + userInfo.email;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._http.put('http://localhost:3333/modifyUserInfo', creds, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    LoadUserInfoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoadUserInfoService);
    return LoadUserInfoService;
}());
exports.LoadUserInfoService = LoadUserInfoService;
//# sourceMappingURL=load.user.info.service.js.map