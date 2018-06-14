import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.css']
})
export class ProductCheckoutComponent implements OnInit {
  cartItems: any;
  totalPrice: any;

  constructor(private _data: DataService, private location: Location) {
    this.totalPrice = 0;
    this.cartItems = [];

  }

  goBack(): void {
    this.location.back();
  }

  removeCartItems(e, item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
    else if (item.quantity === 1) {
      var index = this.cartItems.indexOf(item);
      this.cartItems.splice(index, 1);
      this._data.changeCartItem(this.cartItems);


    }
    this.totalPrice -= parseInt(item.price);
    e.preventDefault();

  }

  ngOnInit() {
    this._data.cartItem.subscribe(res => this.cartItems = res);

    for (var i = 0; i < this.cartItems.length; i++) {
      var product = this.cartItems[i];
      this.totalPrice += (product.price * product.quantity);
    }
  }

}
