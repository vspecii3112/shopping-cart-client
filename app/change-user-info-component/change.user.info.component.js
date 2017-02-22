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
var load_user_info_service_1 = require('../services/load.user.info.service');
var ChangeUserInfoComponent = (function () {
    function ChangeUserInfoComponent(loaduserinfo, _fb) {
        this.loaduserinfo = loaduserinfo;
        this._fb = _fb;
        this.uName = '';
    }
    ChangeUserInfoComponent.prototype.ngOnInit = function () {
        this.changeUserInfoForm = this._fb.group({
            'firstName': [''],
            'lastName': [''],
            'email': ['']
        });
        this.getUserInfo();
    };
    ChangeUserInfoComponent.prototype.getUserInfo = function () {
        var _this = this;
        // the getUser() function will get the current username that is logged in and then calls the displayUserInfo() to extract the user info from the mongoDB using the username
        this.loaduserinfo.getUser()
            .subscribe(function (data) {
            _this.displayUserInfo(data.username); // uses the username and calls the displayUserInfo() function to extract and display the user info
        }, function (err) { return console.log(err.msg); }, function () { return console.log('getUserInfo complete'); });
    };
    ChangeUserInfoComponent.prototype.displayUserInfo = function (userName) {
        var _this = this;
        this.loaduserinfo.displayUser(userName)
            .subscribe(function (data) {
            _this.changeUserInfoForm.setValue({ firstName: data.firstName, lastName: data.lastName, email: data.userEmail }); // sets the value to the form fields
        }, function (err) { return console.log(err.msg); }, function () { return console.log('displayUserInfo complete'); });
    };
    ChangeUserInfoComponent.prototype.modifyUserInfo = function () {
        var _this = this;
        this.loaduserinfo.getUser()
            .subscribe(function (data) {
            _this.uName = data.username;
            _this.loaduserinfo.modifyUser(_this.uName, _this.changeUserInfoForm.value)
                .subscribe(function (datas) { return console.log(datas.msg); }, function (err) { return console.log(err.msg); }, function () { return console.log('data received'); });
        }, function (err) { return console.log(err.msg); }, function () { return console.log('getuserInfo complete'); });
    };
    ChangeUserInfoComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/change-user-info-component/change.user.info.component.html'
        }), 
        __metadata('design:paramtypes', [load_user_info_service_1.LoadUserInfoService, forms_1.FormBuilder])
    ], ChangeUserInfoComponent);
    return ChangeUserInfoComponent;
}());
exports.ChangeUserInfoComponent = ChangeUserInfoComponent;
//# sourceMappingURL=change.user.info.component.js.map