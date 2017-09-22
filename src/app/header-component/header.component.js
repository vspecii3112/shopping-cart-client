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
var user_service_1 = require("../services/user.service");
var HeaderComponent = (function () {
    function HeaderComponent(UserAuthentication, UserLogout, _router) {
        this.UserAuthentication = UserAuthentication;
        this.UserLogout = UserLogout;
        this._router = _router;
        this.loggedIn = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.checkAuthentication();
    };
    HeaderComponent.prototype.checkAuthentication = function () {
        var _this = this;
        this.UserAuthentication.isLoggedIn()
            .subscribe(function (data) {
            if (data.msg) {
                console.log('logged in');
                _this.loggedIn = true;
            }
            else {
                console.log('not logged in');
                _this.loggedIn = false;
            }
        }, function (err) {
            console.log(err.msg);
        }, function () { return console.log('authentication complete'); });
    };
    HeaderComponent.prototype.userLogout = function () {
        var _this = this;
        this.UserLogout.logoutfn()
            .subscribe(function (data) {
            console.log(data.msg);
            _this.checkAuthentication(); //Checks the authentication of the user to get the latest update so that Angular will re-render the page when it reloads the same URL.
        }, function (err) { return console.log('error logging out'); }, function () { return console.log('logout complete'); });
    };
    return HeaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], HeaderComponent.prototype, "totalQuantity", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: 'app/header-component/header.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, user_service_1.UserService, router_1.Router])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map