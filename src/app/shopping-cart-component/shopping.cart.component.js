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
var router_1 = require("@angular/router");
var shopping_cart_service_1 = require("../services/shopping.cart.service");
var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(shoppingcart, _router) {
        this.shoppingcart = shoppingcart;
        this._router = _router;
        this.cartItems = []; //this array variable stores the shopping cart item objects
        this.cartTotalPrice = 0; //this variable stores the total price of all the items in the shopping cart
        this.total_qty = 0; // this variable stores the total quantity
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.shoppingCartItems();
    };
    ShoppingCartComponent.prototype.shoppingCartItems = function () {
        var _this = this;
        this.shoppingcart.getCartItems() //getCartItems observable gets the shopping cart items and stores it into the cartItems array
            .subscribe(function (data) {
            if (data.coins) {
                _this.cartItems = data.coins.map(function (s) { return JSON.parse(JSON.stringify(s)); }); //maps the contents of the returned data to cartItems[] array. JSON.parse will remove the quotes in the string.
                _this.cartTotalPrice = data.totalPrice; //total price of all the items in the shopping cart
                _this.total_qty = data.totalQuantity; //total quantity of items in the shopping cart
            }
            else {
                _this.cartItems = null;
                _this.cartTotalPrice = 0;
                _this.total_qty = 0;
            }
        }, function (err) { return console.log(err); }, function () { return console.log('Get Cart Items Complete'); });
    };
    ShoppingCartComponent.prototype.reduceOne = function (id) {
        var _this = this;
        this.shoppingcart.reduceOneQuantity(id)
            .subscribe(function (data) {
            if (data.coins) {
                _this.cartItems = data.coins.map(function (s) { return JSON.parse(JSON.stringify(s)); }); //maps the contents of the returned data to cartItems[] array. JSON.parse will remove the quotes in the string.
                _this.cartTotalPrice = data.totalPrice; //total price of all the items in the shopping cart
                _this.total_qty = data.totalQuantity; //total quantity of items in the shopping cart
            }
            else {
                _this.cartItems = null;
                _this.cartTotalPrice = 0;
                _this.total_qty = 0;
            }
        }, function (err) { return console.log(err); }, function () { return console.log('Remove one item complete'); });
    };
    ShoppingCartComponent.prototype.removeAll = function (id) {
        var _this = this;
        this.shoppingcart.removeItem(id)
            .subscribe(function (data) {
            if (data.coins) {
                _this.cartItems = data.coins.map(function (s) { return JSON.parse(JSON.stringify(s)); }); //maps the contents of the returned data to cartItems[] array. JSON.parse will remove the quotes in the string.
                _this.cartTotalPrice = data.totalPrice; //total price of all the items in the shopping cart
                _this.total_qty = data.totalQuantity; //total quantity of items in the shopping cart
            }
            else {
                _this.cartItems = null;
                _this.cartTotalPrice = 0;
                _this.total_qty = 0;
            }
        }, function (err) { return console.log(err); }, function () { return console.log('Remove all single item complete'); });
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/shopping-cart-component/shopping.cart.component.html'
    }),
    __metadata("design:paramtypes", [shopping_cart_service_1.ShoppingCartService, router_1.Router])
], ShoppingCartComponent);
exports.ShoppingCartComponent = ShoppingCartComponent;
//# sourceMappingURL=shopping.cart.component.js.map