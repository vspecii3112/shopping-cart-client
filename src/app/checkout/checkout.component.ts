import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { ShoppingCartService } from '../services/shopping.cart.service';

declare var Stripe: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit{

    //model driven form
    private shoppingCartCheckoutForm: FormGroup;
    private errorMsg: string = "";
  
    cartItems: any = [];    //this array variable stores the shopping cart item objects
    cartTotalPrice: number = 0; //this variable stores the total price of all the items in the shopping cart

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
              this.cartItems=data.coins;
              this.cartTotalPrice = data.totalPrice;
              console.log(this.cartItems);
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
            this._router.navigate(['/order_confirmation/'+ data.orderID]);
            console.log("charge success");
            console.log(data.orderID);
          }
        },
        err => {
          // if there is no cart session, it will redirect back to the home page
          if (err.msg=='cart session does not exist') {
            console.log(err.msg);
            this._router.navigate(['/home']);
          }
          else {
            this.errorMsg = "There was an error processing your request. Check your account if your order was placed. Otherwise please try again."
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
