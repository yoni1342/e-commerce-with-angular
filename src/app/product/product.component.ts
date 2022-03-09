import { Component, OnInit, Input } from '@angular/core';
import { Product, PRODUCTS } from './product.object';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Product = {
    id : 1,
    name : 'Nike',
    price : 2000,
    imageUrl : '../../assets/nike.jpeg',
    description : 'you can read more ',
  }
  productList = PRODUCTS;
  onViewDetail(id:number){
    console.log(id)
  }

  constructor() {}
  
  ngOnInit(): void {
  }

}
