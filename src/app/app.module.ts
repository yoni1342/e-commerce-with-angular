import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';

// const appRoutes: Routes = [
//   {path: 'product', component: ProductComponent},
//   {path: 'customer', component: CustomerComponent}
// ]


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
