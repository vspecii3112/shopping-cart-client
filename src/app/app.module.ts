import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomepageComponent } from './homepage-component/homepage.component';
import { HeaderComponent } from './header-component/header.component';
import { LoginComponent } from './login-component/login.component';
import { SignupComponent } from './signup-component/signup.component';
import { ShoppingCartComponent } from './shopping-cart-component/shopping.cart.component';
import { CheckoutComponent } from './checkout-component/checkout.component';
import { PurchaseHistoryComponent } from './purchase-history-component/purchase.history.component';

import { LoadCoinInfoService } from './services/load.coin.info.service';
import { UserService } from './services/user.service';
import { ShoppingCartService } from './services/shopping.cart.service';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'purchase_history', component: PurchaseHistoryComponent},
  { path: 'cart', component: ShoppingCartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HomepageComponent, HeaderComponent, LoginComponent, SignupComponent, ShoppingCartComponent, CheckoutComponent, PurchaseHistoryComponent ],
  providers: [ LoadCoinInfoService, UserService, ShoppingCartService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
