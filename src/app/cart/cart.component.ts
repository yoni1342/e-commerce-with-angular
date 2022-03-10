import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.object';
import {CART} from '../cart/cart.object'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList = CART;
  constructor() { }

  ngOnInit(): void {
  }

}
