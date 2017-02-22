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
var LoadCoinInfoService = (function () {
    function LoadCoinInfoService(_http) {
        this._http = _http;
    }
    LoadCoinInfoService.prototype.getCoins = function () {
        return this._http.get('http://localhost:3333/get_coin_info')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    LoadCoinInfoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoadCoinInfoService);
    return LoadCoinInfoService;
}());
exports.LoadCoinInfoService = LoadCoinInfoService;
//# sourceMappingURL=load.coin.info.service.js.map