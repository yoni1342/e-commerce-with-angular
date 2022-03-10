import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product, PRODUCTS} from './product.object';
import {CART} from '../cart/cart.object';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() id= 0;
  @Input() title= '';
  @Input() price= 0;
  @Input() description= '';
  @Input() category= '';
  @Input() image= '';
  @Input() isCart = false;
productList = PRODUCTS;
cart = CART;
  editProduct(id: number){
    console.log(id);
    this.router.navigateByUrl('/product/detail/' + id); // ‘id’ is called parameter
  }
  deleteProduct(id: number){
    this.productList.forEach((value, index)=>{
      if(value.id == id){
        this.productList.splice(index, 1);
      }
    })
  }
  deleteProductCart(id:number){
    this.cart.forEach((value, index)=>{
      if(value.id == id){
        this.cart.splice(index, 1)
      }
    })
  }
  addToCart(id: number){
    for(let product of this.productList){
      if(product.id == id){
        this.cart.push(product);
      }
    }
  }
  constructor(private router: Router ) {}
  
  
  ngOnInit(): void {
  }

}
