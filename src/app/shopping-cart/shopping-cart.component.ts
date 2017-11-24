import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ShoppingCartService } from '../services/shopping.cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingcart: ShoppingCartService, private _router: Router, private _fb: FormBuilder) {
  }

  public updateCartForm: FormGroup; //our form model

  ngOnInit() {

    //initialize the form
    this.updateCartForm = this._fb.group({
      carts: this._fb.array([
        this.initCartForm(),
      ])
    });

    this.shoppingCartItems();
  }

  cartItems: any = [];    //this array variable stores the shopping cart item objects
  cartTotalPrice: number = 0; //this variable stores the total price of all the items in the shopping cart
  total_qty: number = 0;  // this variable stores the total quantity

  initCartForm() {
    return this._fb.group({
      productName:[''],
      productQuantity: [''],
      productPrice: [''],
      productTotalPrice: ['']
    });
  }

  showCartItems(items: any) {
    const control = <FormArray>this.updateCartForm.controls['carts'];
    for (var i = 0; i < items.length; i++) {
      control.push( this._fb.group({
          productName:[items[i].item.title],
          productQuantity: [items[i].qty],
          productPrice: [items[i].item.price],
          productTotalPrice: ['']
        })
      );
    };
  }

  clearCartFirstItem() {
    //Clears the first item because its initialized with ''
    const control = <FormArray>this.updateCartForm.controls['carts'];
    control.removeAt(0);
  }

  shoppingCartItems() {
    this.shoppingcart.getCartItems()    //getCartItems observable gets the shopping cart items and stores it into the cartItems array
      .subscribe(
        data => {
          if (data.coins) {
            this.cartItems=data.coins;
            this.cartTotalPrice = data.totalPrice;  //total price of all the items in the shopping cart
            this.total_qty = data.totalQuantity;  //total quantity of items in the shopping cart
            //this.updateCartForm.value.carts[0].productName = this.cartItems[0].item.title;
            this.clearCartFirstItem();
            this.showCartItems(this.cartItems);
            console.log(this.cartItems);
          }
          else {
            this.clearCartFirstItem();
            this.cartItems = null;
            this.cartTotalPrice = 0;
            this.total_qty = 0;
          }
        },
        err => console.log(err),
        () => console.log('Get Cart Items Complete')
      )
  }

  removeAll(i: number) {
    // remove address from the list
    const control = <FormArray>this.updateCartForm.controls['carts'];
    control.removeAt(i);
    this.cartItems.splice(i, 1);
  }

  updateCart(cartForm: any) {
    console.log(cartForm);
    for (var i=0; i<cartForm.controls.carts.length; i++) {
      this.cartItems[i].qty = cartForm.controls.carts.controls[i].controls.productQuantity.value;
      this.cartItems[i].price = cartForm.controls.carts.controls[i].controls.productQuantity.value * cartForm.controls.carts.controls[i].controls.productPrice.value;
    }
    //console.log(this.cartItems);
    
    this.shoppingcart.updateCart(this.cartItems)
    .subscribe(
      data => {
        if (data.success) {
          this.total_qty = data.totalQuantity;
          this.cartTotalPrice = data.totalPrice;
          console.log('update success');
        }
      },
      err => console.log(err),
      () => console.log('Update cart complete')
    )
  
  }

  /*
  shoppingCartItems() {
    this.shoppingcart.getCartItems()    //getCartItems observable gets the shopping cart items and stores it into the cartItems array
      .subscribe(
        data => {
          if (data.coins) {
            this.cartItems=data.coins;
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
  */

}
