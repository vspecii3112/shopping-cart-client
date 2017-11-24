import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignupComponent } from './signup/signup.component';
import { ChangeUserPasswordComponent } from './change-user-password/change-user-password.component';

import { UserService } from './services/user.service';
import { ShoppingCartService } from './services/shopping.cart.service';
import { LoadCoinInfoService } from './services/load.coin.info.service';
import { RouteService } from './services/route.service';


const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'purchase_history', component: PurchaseHistoryComponent, canActivate: [IsLoggedInService]},
  { path: 'cart', component: ShoppingCartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'change_user_password', component: ChangeUserPasswordComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CheckoutComponent,
    HomepageComponent,
    LoginComponent,
    PurchaseHistoryComponent,
    ShoppingCartComponent,
    SignupComponent,
    ChangeUserPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    ShoppingCartService,
    LoadCoinInfoService,
    RouteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
