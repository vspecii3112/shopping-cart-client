import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login-component/login.component';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { SignupComponent } from './signup-component/signup.component';
import { SignupSuccessComponent} from './signup-component/signup.success.component';
import { HomepageComponent } from './homepage-component/homepage.component';
import { ChangeUserInfoComponent } from './change-user-info-component/change.user.info.component';
import { ChangeUserPasswordComponent } from './change-user-password-component/change.user.password.component';

import { AuthManager } from './services/authmanager.service';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [AuthManager] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthManager]},
    { path: 'signup', component: SignupComponent},
    { path: 'signup_complete', component: SignupSuccessComponent},
    { path: 'home', component: HomepageComponent},
    { path: 'change_user_info', component: ChangeUserInfoComponent},
    { path: 'change_user_password', component: ChangeUserPasswordComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);