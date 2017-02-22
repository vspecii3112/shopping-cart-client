import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header-component/header.component';
import { LoadCoinInfoService } from '../services/load.coin.info.service';

@Component({
  templateUrl: 'app/homepage-component/homepage.component.html'
})

export class HomepageComponent implements OnInit{

  constructor(private loadCoinInfo:LoadCoinInfoService) {
  }

  ngOnInit() {
    this.displayAllCoins();
  }

  coins=[];

  displayAllCoins(){
    this.loadCoinInfo.getCoins()
      .subscribe(
        data => {
          this.coins=data.msg.map(s=>JSON.parse(JSON.stringify(s)));    //maps the contents of the returned data to coins[] array. JSON.parse will remove the quotes in the string.
          console.log(this.coins);
        },
        err => console.log('error display all coins'),
        () => console.log('complete display all coins')
      )
  }



}
