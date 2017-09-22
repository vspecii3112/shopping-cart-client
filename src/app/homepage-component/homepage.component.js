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
var load_coin_info_service_1 = require("../services/load.coin.info.service");
var shopping_cart_service_1 = require("../services/shopping.cart.service");
var HomepageComponent = (function () {
    function HomepageComponent(loadCoinInfo, shoppingCart) {
        this.loadCoinInfo = loadCoinInfo;
        this.shoppingCart = shoppingCart;
        this.coins = []; //the coins array variable stores the coin objects
        this.total_qty = 0; //stores the number of items in the variable and this number is shown beside the shopping cart link
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.displayAllCoins();
        this.getTotalQuantity();
    };
    //The displayAllCoins function will display the coins available from the mongoDB backend
    HomepageComponent.prototype.displayAllCoins = function () {
        var _this = this;
        this.loadCoinInfo.getCoins() //getCoins observable gets the coins from the mongoDB backend and stores it into the coins array
            .subscribe(function (data) {
            _this.coins = data.msg.map(function (s) { return JSON.parse(JSON.stringify(s)); }); //maps the contents of the returned objects to coins[] array. JSON.parse will remove the quotes in the string.
        }, function (err) { return console.log('error display all coins'); }, function () { return console.log('complete display all coins'); });
    };
    //The getTotalQuantity function will get the number of items in the shopping cart and stores it in the variable total_qty
    HomepageComponent.prototype.getTotalQuantity = function () {
        var _this = this;
        this.shoppingCart.getTotalQuantity()
            .subscribe(function (data) {
            _this.total_qty = data.totalQuantity;
        }, function (err) { return console.log('error getting item quantity'); }, function () { return console.log('complete getting item quantity'); });
    };
    // The addItemToCart function handles the button event, when clicked, it will add to the shopping cart and store the number of items in the shopping cart to the variable total_qty
    HomepageComponent.prototype.addItemToCart = function (coinID) {
        var _this = this;
        this.shoppingCart.addItem(coinID)
            .subscribe(function (data) {
            _this.total_qty = data.msg.totalQty;
        }, function (err) { return console.log('error adding coins to cart'); }, function () { return console.log('complete adding coins to cart'); });
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/homepage-component/homepage.component.html'
    }),
    __metadata("design:paramtypes", [load_coin_info_service_1.LoadCoinInfoService, shopping_cart_service_1.ShoppingCartService])
], HomepageComponent);
exports.HomepageComponent = HomepageComponent;
//# sourceMappingURL=homepage.component.js.map