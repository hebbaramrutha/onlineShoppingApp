import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCheckoutComponent }  from './product-checkout/product-checkout.component';
import {ProductsComponent} from './products/products.component';

const routes: Routes = [
  { path: 'checkout/:cartItems', component: ProductCheckoutComponent },
  { path:'products',component:ProductsComponent},
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];
 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
