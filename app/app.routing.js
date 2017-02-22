"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login-component/login.component');
var dashboard_component_1 = require('./dashboard-component/dashboard.component');
var signup_component_1 = require('./signup-component/signup.component');
var signup_success_component_1 = require('./signup-component/signup.success.component');
var homepage_component_1 = require('./homepage-component/homepage.component');
var change_user_info_component_1 = require('./change-user-info-component/change.user.info.component');
var change_user_password_component_1 = require('./change-user-password-component/change.user.password.component');
var authmanager_service_1 = require('./services/authmanager.service');
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent, canActivate: [authmanager_service_1.AuthManager] },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [authmanager_service_1.AuthManager] },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'signup_complete', component: signup_success_component_1.SignupSuccessComponent },
    { path: 'home', component: homepage_component_1.HomepageComponent },
    { path: 'change_user_info', component: change_user_info_component_1.ChangeUserInfoComponent },
    { path: 'change_user_password', component: change_user_password_component_1.ChangeUserPasswordComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map