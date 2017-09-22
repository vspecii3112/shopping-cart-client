"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var homepage_component_1 = require("./homepage-component/homepage.component");
var header_component_1 = require("./header-component/header.component");
var login_component_1 = require("./login-component/login.component");
var signup_component_1 = require("./signup-component/signup.component");
var shopping_cart_component_1 = require("./shopping-cart-component/shopping.cart.component");
var checkout_component_1 = require("./checkout-component/checkout.component");
var purchase_history_component_1 = require("./purchase-history-component/purchase.history.component");
var load_coin_info_service_1 = require("./services/load.coin.info.service");
var user_service_1 = require("./services/user.service");
var shopping_cart_service_1 = require("./services/shopping.cart.service");
var appRoutes = [
    { path: 'home', component: homepage_component_1.HomepageComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'purchase_history', component: purchase_history_component_1.PurchaseHistoryComponent },
    { path: 'cart', component: shopping_cart_component_1.ShoppingCartComponent },
    { path: 'checkout', component: checkout_component_1.CheckoutComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, homepage_component_1.HomepageComponent, header_component_1.HeaderComponent, login_component_1.LoginComponent, signup_component_1.SignupComponent, shopping_cart_component_1.ShoppingCartComponent, checkout_component_1.CheckoutComponent, purchase_history_component_1.PurchaseHistoryComponent],
        providers: [load_coin_info_service_1.LoadCoinInfoService, user_service_1.UserService, shopping_cart_service_1.ShoppingCartService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map