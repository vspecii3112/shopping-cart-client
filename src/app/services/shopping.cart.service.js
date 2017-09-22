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
var ShoppingCartService = (function () {
    function ShoppingCartService(_http) {
        this._http = _http;
    }
    ShoppingCartService.prototype.getCartItems = function () {
        var options = new http_1.RequestOptions({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/shopping_cart', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ShoppingCartService.prototype.getTotalQuantity = function () {
        var options = new http_1.RequestOptions({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/get_total_quantity', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ShoppingCartService.prototype.addItem = function (coinID) {
        //let myParams = new URLSearchParams();
        //myParams.set('id', coinID);
        var options = new http_1.RequestOptions({
            //params: myParams,
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/add_to_cart/' + coinID, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ShoppingCartService.prototype.reduceOneQuantity = function (coinID) {
        var options = new http_1.RequestOptions({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/reduce_one/' + coinID, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ShoppingCartService.prototype.removeItem = function (coinID) {
        var options = new http_1.RequestOptions({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/remove_all/' + coinID, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ShoppingCartService.prototype.cartCheckout = function () {
        var options = new http_1.RequestOptions({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/checkout', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ShoppingCartService.prototype.makeCharge = function (cardToken) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var options = new http_1.RequestOptions({
            headers: headers,
            withCredentials: true //set to true to send cookie along with request
        });
        var token = 'stripeToken=' + cardToken;
        return this._http.post('http://localhost:3333/make_charge', token, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ShoppingCartService.prototype.getPurchaseHistory = function () {
        var options = new http_1.RequestOptions({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/purchase_history', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    return ShoppingCartService;
}());
ShoppingCartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ShoppingCartService);
exports.ShoppingCartService = ShoppingCartService;
//# sourceMappingURL=shopping.cart.service.js.map