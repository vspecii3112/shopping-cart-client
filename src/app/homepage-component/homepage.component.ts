import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header-component/header.component';
import { LoadCoinInfoService } from '../services/load.coin.info.service';
import { ShoppingCartService } from '../services/shopping.cart.service';

@Component({
  templateUrl: 'app/homepage-component/homepage.component.html'
})

export class HomepageComponent implements OnInit{

  constructor(private loadCoinInfo: LoadCoinInfoService, private shoppingCart: ShoppingCartService) {
  }

  ngOnInit() {
    this.displayAllCoins();
    this.getTotalQuantity();
  }

  coins:any=[];   //the coins array variable stores the coin objects
  total_qty: number = 0;    //stores the number of items in the variable and this number is shown beside the shopping cart link

  //The displayAllCoins function will display the coins available from the mongoDB backend
  displayAllCoins(){
    this.loadCoinInfo.getCoins()    //getCoins observable gets the coins from the mongoDB backend and stores it into the coins array
      .subscribe(
        data => {
          this.coins=data.msg.map((s:any)=>JSON.parse(JSON.stringify(s)));    //maps the contents of the returned objects to coins[] array. JSON.parse will remove the quotes in the string.
        },
        err => console.log('error display all coins'),
        () => console.log('complete display all coins')
      )
  }

  //The getTotalQuantity function will get the number of items in the shopping cart and stores it in the variable total_qty
  getTotalQuantity() {
    this.shoppingCart.getTotalQuantity()
      .subscribe(
        data => {
          this.total_qty = data.totalQuantity;
        },
        err => console.log('error getting item quantity'),
        () => console.log('complete getting item quantity')
      )

  }

  // The addItemToCart function handles the button event, when clicked, it will add to the shopping cart and store the number of items in the shopping cart to the variable total_qty
  addItemToCart(coinID: string) {   //click event handler
    this.shoppingCart.addItem(coinID)
      .subscribe(
        data => {
          this.total_qty = data.msg.totalQty;
        },
        err => console.log('error adding coins to cart'),
        () => console.log('complete adding coins to cart')
      )
  }

}

