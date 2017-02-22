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
var router_1 = require('@angular/router');
var signup_service_1 = require('../services/signup.service');
var SignupComponent = (function () {
    function SignupComponent(signupserv, _router, route) {
        this.signupserv = signupserv;
        this._router = _router;
        this.route = route;
        this.signupUser = {
            fname: '',
            lname: '',
            email: '',
            username: '',
            password: ''
        };
    }
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.signupserv.signupfn(this.signupUser)
            .subscribe(function (data) {
            if (data.success) {
                _this._router.navigate(['/signup_complete']);
            }
        }, function (err) {
            console.log(err.msg);
        }, function () { return console.log('signup complete'); });
    };
    SignupComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/signup-component/signup.component.html'
        }), 
        __metadata('design:paramtypes', [signup_service_1.SignupService, router_1.Router, router_1.ActivatedRoute])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map