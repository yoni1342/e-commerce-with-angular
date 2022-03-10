import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {
    path: 'product/edit/:id',
    component: EditProductComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ProductListComponent
  },
  {
    path: 'product/detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'customer/edit/:id',
    component: EditCustomerComponent
  },
  {
    path: 'customer/add',
    component: AddCustomerComponent
  },
  {
    path: 'product/add',
    component: AddProductComponent
  },
  {
    path: 'product/cart',
    component: CartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
