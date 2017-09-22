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
var LoginComponent = (function () {
    function LoginComponent(authenticate, _router, route) {
        this.authenticate = authenticate;
        this._router = _router;
        this.route = route;
        this.loginUser = {
            username: '',
            password: ''
        };
        this.loginMsg = '';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticate.loginfn(this.loginUser)
            .subscribe(function (data) {
            if (data.redirect) {
                console.log(data.msg);
                _this._router.navigate([data.redirect]);
            }
        }, function (err) {
            console.log(err.msg);
            _this.loginMsg = err.msg;
        }, function () { return console.log('login complete'); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/login-component/login.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, router_1.ActivatedRoute])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map