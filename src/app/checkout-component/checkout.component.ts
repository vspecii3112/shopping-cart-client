import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HeaderComponent } from '../header-component/header.component';
import { ShoppingCartService } from '../services/shopping.cart.service';

declare var Stripe:any;

@Component({
  templateUrl: 'app/checkout-component/checkout.component.html'
})

export class CheckoutComponent implements OnInit{

  constructor (private shoppingcart: ShoppingCartService, private _router: Router, private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.checkCart();

    this.initCard();

    this.shoppingCartCheckoutForm = this._fb.group({
      'checkoutName': [''],
      'checkoutAddress': [''],
      'checkoutCountry': ['']
    });
  }

  //model driven form
  public shoppingCartCheckoutForm: FormGroup;

  totalCartPrice: number = 0;
  total_qty: number = 0;    //stores the number of items in the variable and this number is shown beside the shopping cart link
  stripe: any;
  elements: any;
  card: any;
  cardNumber: any;
  cardExpiry: any;
  cardCvc: any;
  postalCode: any;

  checkoutOrderInfo = {
    name: '',
    addressLine1: '',
    addressLine2: '',
    addressCity: '',
    addressState: '',
    addressZip: '',
    addressCountry: ''
  }

  checkCart() {
    this.shoppingcart.cartCheckout()
      .subscribe(
        data => {
          if (data.redirect=='home') {
            this._router.navigate(['/home']);
            console.log('no items in cart');
          }
          else if (data.redirect=='login'){
            this._router.navigate(['/login']);
          }
          else {
            this.totalCartPrice = data.totalPrice;
          }
          this.total_qty = data.totalQuantity;
        },
        err => console.log(err),
        () => console.log('checkout done')
      )
  }

  initCard() {
    this.stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    this.elements = this.stripe.elements();
    this.cardNumber = this.elements.create('cardNumber');
    this.cardExpiry = this.elements.create('cardExpiry');
    this.cardCvc = this.elements.create('cardCvc');
    this.postalCode = this.elements.create('postalCode');
    
    this.cardNumber.mount('#cardNumber-element');
    this.cardExpiry.mount('#cardExpiry-element');
    this.cardCvc.mount('#cardCvc-element');
    this.postalCode.mount('#postalCode-element');
  }

  stripeTokenHandler(token: any) {
    this.shoppingcart.makeCharge(token.id)
    .subscribe(
      data => {
        if (data.success) {
          this._router.navigate(['/home']);
          console.log("success charge");
        }
      },
      err => {
        // if there is no cart session, it will redirect back to the home page
        if (err.msg=='cart session does not exist') {
          console.log(err.msg);
          this._router.navigate(['/home']);
        }
        else {
          console.log(err.msg); //error message if theres a error in charging
        }
      },
      () => {console.log('Checkout complete');}
    )
  }

  createToken() {
    this.stripe.createToken(this.cardNumber, {
      name: this.checkoutOrderInfo.name,
      address_line1: this.checkoutOrderInfo.addressLine1,
      address_line2: this.checkoutOrderInfo.addressLine2,
      address_city: this.checkoutOrderInfo.addressCity,
      address_state: this.checkoutOrderInfo.addressState,
      address_zip: this.checkoutOrderInfo.addressZip,
      address_country: this.checkoutOrderInfo.addressCountry
    })
    .then((result:any) => {   //must use arrow function to preserve "this" keyword, otherwise cannot make function call to chargeCard()
      if (result.error) {
        console.log(result.error.message);
      }
      else {
        this.stripeTokenHandler(result.token);
      }
    });
  }
  
}
