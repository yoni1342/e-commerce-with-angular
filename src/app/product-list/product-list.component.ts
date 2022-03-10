import { Component, OnInit } from '@angular/core';
import productData from '../produt.json';
import { Product, PRODUCTS } from '../product/product.object';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = PRODUCTS;

}
