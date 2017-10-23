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

import { UserService } from './services/user.service';
import { ShoppingCartService } from './services/shopping.cart.service';
import { LoadCoinInfoService } from './services/load.coin.info.service';
import { UpdateCartComponent } from './update-cart/update-cart.component';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'purchase_history', component: PurchaseHistoryComponent},
  { path: 'cart', component: ShoppingCartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'update_cart', component: UpdateCartComponent},
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
    UpdateCartComponent
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
    LoadCoinInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
