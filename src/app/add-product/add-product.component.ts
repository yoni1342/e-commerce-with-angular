import { Component, OnInit } from '@angular/core';
import { Product, PRODUCTS } from '../product/product.object';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  products = PRODUCTS;
  newProduct = new Product();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  add(){
    this.products.push(this.newProduct)
    this.router.navigateByUrl('/');
  }

}
