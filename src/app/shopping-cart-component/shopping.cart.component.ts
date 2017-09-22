import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header-component/header.component';
import { ShoppingCartService } from '../services/shopping.cart.service';

@Component({
  templateUrl: 'app/shopping-cart-component/shopping.cart.component.html'
})

export class ShoppingCartComponent implements OnInit{

  constructor(private shoppingcart: ShoppingCartService, private _router: Router) {
  }

  ngOnInit() {
    this.shoppingCartItems();
  }

  cartItems: any = [];    //this array variable stores the shopping cart item objects
  cartTotalPrice: number = 0; //this variable stores the total price of all the items in the shopping cart
  total_qty: number = 0;  // this variable stores the total quantity

  shoppingCartItems() {
    this.shoppingcart.getCartItems()    //getCartItems observable gets the shopping cart items and stores it into the cartItems array
      .subscribe(
        data => {
          if (data.coins) {
            this.cartItems=data.coins.map((s:any)=>JSON.parse(JSON.stringify(s)));    //maps the contents of the returned data to cartItems[] array. JSON.parse will remove the quotes in the string.
            this.cartTotalPrice = data.totalPrice;  //total price of all the items in the shopping cart
            this.total_qty = data.totalQuantity;  //total quantity of items in the shopping cart
          }
          else {
            this.cartItems = null;
            this.cartTotalPrice = 0;
            this.total_qty = 0;
          }
        },
        err => console.log(err),
        () => console.log('Get Cart Items Complete')
      )
  }

  reduceOne(id: string) {
    this.shoppingcart.reduceOneQuantity(id)
      .subscribe(
        data => {
          if (data.coins) {
            this.cartItems=data.coins.map((s:any)=>JSON.parse(JSON.stringify(s)));    //maps the contents of the returned data to cartItems[] array. JSON.parse will remove the quotes in the string.
            this.cartTotalPrice = data.totalPrice;  //total price of all the items in the shopping cart
            this.total_qty = data.totalQuantity;  //total quantity of items in the shopping cart
          }
          else {
            this.cartItems = null;
            this.cartTotalPrice = 0;
            this.total_qty = 0;
          }
        },
        err => console.log(err),
        () => console.log('Remove one item complete')
      )
  }

  removeAll(id: string) {
    this.shoppingcart.removeItem(id)
      .subscribe(
          data => {
            if (data.coins) {
              this.cartItems=data.coins.map((s:any)=>JSON.parse(JSON.stringify(s)));    //maps the contents of the returned data to cartItems[] array. JSON.parse will remove the quotes in the string.
              this.cartTotalPrice = data.totalPrice;  //total price of all the items in the shopping cart
              this.total_qty = data.totalQuantity;  //total quantity of items in the shopping cart
            }
            else {
              this.cartItems = null;
              this.cartTotalPrice = 0;
              this.total_qty = 0;
            }
          },
          err => console.log(err),
          () => console.log('Remove all single item complete')
        )
  }
}

