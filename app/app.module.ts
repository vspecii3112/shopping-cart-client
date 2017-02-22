import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { LoginComponent } from './login-component/login.component';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { SignupComponent } from './signup-component/signup.component';
import { SignupSuccessComponent } from './signup-component/signup.success.component';
import { HeaderComponent } from './header-component/header.component';
import { HomepageComponent } from './homepage-component/homepage.component';
import { ChangeUserInfoComponent } from './change-user-info-component/change.user.info.component';
import { ChangeUserPasswordComponent } from './change-user-password-component/change.user.password.component';

import { AuthService } from './services/auth.service';
import { AuthManager } from './services/authmanager.service';
import { SignupService } from './services/signup.service';
import { LoadUserInfoService } from './services/load.user.info.service';
import { LoadCoinInfoService } from './services/load.coin.info.service';
import { ChangeUserPasswordService } from './services/change.user.password.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing ],
  declarations: [ AppComponent, LoginComponent, DashboardComponent, SignupComponent, SignupSuccessComponent, HeaderComponent, HomepageComponent, ChangeUserInfoComponent, ChangeUserPasswordComponent ],
  providers: [ appRoutingProviders, AuthService, AuthManager, SignupService, LoadUserInfoService, LoadCoinInfoService, ChangeUserPasswordService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }