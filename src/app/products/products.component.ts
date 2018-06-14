import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: object;
  cartItems: any;


  addItems(e, item): void {
    if (this.cartItems.length == 0) {
      item.quantity = 1;
      this.cartItems.push(item);
      this._data.changeCartItem(this.cartItems);
    }
    else {
      var repeat = false;

      for (var i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == item.id) {
          repeat = true;
          this.cartItems[i].quantity += 1;
        }
      }
      if (!repeat) {
        item.quantity = 1;
        this.cartItems.push(item);
        this._data.changeCartItem(this.cartItems);
      }
    }
    e.preventDefault();
  }

  constructor(private _data: DataService) {
    this.cartItems = [];


    this.products = [
      {
        "name": "Mobile",
        "description": "This sleek device is a combination of all the essential features",
        "price": 45000,
        "quantity": 0,
        "id": 1
      },
      {
        "name": "Television",
        "description": "This 50-inch device will give you the ultimate home theatre experience",
        "price": 66350,
        "quantity": 0,
        "id": 2
      },
      {
        "name": "Mixer",
        "description": "Make delicious Indian food using this high power mixer!",
        "price": 5999,
        "quantity": 0,
        "id": 3
      },
      {
        "name": "Camera",
        "description": "Capture your beautiful moments and cherish them for lifetime",
        "price": 55000,
        "quantity": 0,
        "id": 4
      },
      {
        "name": "Laptop",
        "description": "This powerful gaming laptop can be used for the ultimate gaming experience",
        "price": 75000,
        "quantity": 0,
        "id": 5
      },
      {
        "name": "Microwave",
        "description": "Bake delicious cakes and cook delicious food using this power efficient microwave",
        "price": 20000,
        "quantity": 0,
        "id": 6
      }
    ];

  }

  ngOnInit() {
    this._data.cartItem.subscribe(res => this.cartItems = res);
  }

}
