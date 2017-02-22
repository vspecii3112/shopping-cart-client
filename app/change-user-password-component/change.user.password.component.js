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
var forms_1 = require('@angular/forms');
var change_user_password_service_1 = require('../services/change.user.password.service');
var ChangeUserPasswordComponent = (function () {
    function ChangeUserPasswordComponent(changeuserpassword, _fb) {
        this.changeuserpassword = changeuserpassword;
        this._fb = _fb;
    }
    ChangeUserPasswordComponent.prototype.ngOnInit = function () {
        this.changeUserPasswordForm = this._fb.group({
            'oldPassword': [''],
            'newPassword': [''],
            'retypePassword': ['']
        });
    };
    ChangeUserPasswordComponent.prototype.modifyUserPassword = function () {
    };
    ChangeUserPasswordComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/change-user-password-component/change.user.password.component.html'
        }), 
        __metadata('design:paramtypes', [change_user_password_service_1.ChangeUserPasswordService, forms_1.FormBuilder])
    ], ChangeUserPasswordComponent);
    return ChangeUserPasswordComponent;
}());
exports.ChangeUserPasswordComponent = ChangeUserPasswordComponent;
//# sourceMappingURL=change.user.password.component.js.map