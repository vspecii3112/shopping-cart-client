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
var load_coin_info_service_1 = require('../services/load.coin.info.service');
var HomepageComponent = (function () {
    function HomepageComponent(loadCoinInfo) {
        this.loadCoinInfo = loadCoinInfo;
        this.coins = [];
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.displayAllCoins();
    };
    HomepageComponent.prototype.displayAllCoins = function () {
        var _this = this;
        this.loadCoinInfo.getCoins()
            .subscribe(function (data) {
            _this.coins = data.msg.map(function (s) { return JSON.parse(JSON.stringify(s)); }); //maps the contents of the returned data to coins[] array. JSON.parse will remove the quotes in the string.
            console.log(_this.coins);
        }, function (err) { return console.log('error display all coins'); }, function () { return console.log('complete display all coins'); });
    };
    HomepageComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/homepage-component/homepage.component.html'
        }), 
        __metadata('design:paramtypes', [load_coin_info_service_1.LoadCoinInfoService])
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;
//# sourceMappingURL=homepage.component.js.map