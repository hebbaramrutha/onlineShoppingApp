import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataService} from './data.service';

import { AppComponent } from './app.component';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCheckoutComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})


export class AppModule { }
