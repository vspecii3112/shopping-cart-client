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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var login_component_1 = require('./login-component/login.component');
var dashboard_component_1 = require('./dashboard-component/dashboard.component');
var signup_component_1 = require('./signup-component/signup.component');
var signup_success_component_1 = require('./signup-component/signup.success.component');
var header_component_1 = require('./header-component/header.component');
var homepage_component_1 = require('./homepage-component/homepage.component');
var change_user_info_component_1 = require('./change-user-info-component/change.user.info.component');
var change_user_password_component_1 = require('./change-user-password-component/change.user.password.component');
var auth_service_1 = require('./services/auth.service');
var authmanager_service_1 = require('./services/authmanager.service');
var signup_service_1 = require('./services/signup.service');
var load_user_info_service_1 = require('./services/load.user.info.service');
var load_coin_info_service_1 = require('./services/load.coin.info.service');
var change_user_password_service_1 = require('./services/change.user.password.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, dashboard_component_1.DashboardComponent, signup_component_1.SignupComponent, signup_success_component_1.SignupSuccessComponent, header_component_1.HeaderComponent, homepage_component_1.HomepageComponent, change_user_info_component_1.ChangeUserInfoComponent, change_user_password_component_1.ChangeUserPasswordComponent],
            providers: [app_routing_1.appRoutingProviders, auth_service_1.AuthService, authmanager_service_1.AuthManager, signup_service_1.SignupService, load_user_info_service_1.LoadUserInfoService, load_coin_info_service_1.LoadCoinInfoService, change_user_password_service_1.ChangeUserPasswordService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map