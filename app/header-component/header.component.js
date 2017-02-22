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
//import login = require('../globals/globals');   //trying to make a global variable
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.loggedIn = false;
        this.notLoggedIn = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (window.sessionStorage.getItem('auth_key')) {
            // if user is logged in, it will set the user account dropdown items in the nav bar
            this.loggedIn = true;
            this.notLoggedIn = false;
        }
        else {
            // if user is not logged in, it will set the user account dropdown items in the nav bar
            this.notLoggedIn = true;
            this.loggedIn = false;
        }
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: 'app/header-component/header.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map