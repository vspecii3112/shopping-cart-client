import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-checkout-items',
  templateUrl: './checkout-items.component.html',
  styleUrls: ['./checkout-items.component.css']
})
export class CheckoutItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
    cartItemsArray: number;

}
