import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
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
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
