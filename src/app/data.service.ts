import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {ProductsComponent} from './products/products.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cartItems=new BehaviorSubject<any>([]);
  cartItem = this.cartItems.asObservable();

  constructor() {
   }


  changeCartItem(item)
  {
    this.cartItems.next(item);
  }
}
