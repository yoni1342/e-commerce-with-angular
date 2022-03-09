import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from '../product/product.object';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private router: Router) {}
  
  products = PRODUCTS;
  selectedProduct = new Product();
  newProduct = new Product();

  ngOnInit(): void {
    this.route.params.subscribe(
      param=>{
        for(let product of this.products){
          if(product.id == param['id']){
            this.selectedProduct = product
        }
      }
  }
  )

}
update(){
      this.selectedProduct.name = this.newProduct.name;
      this.selectedProduct.price = this.newProduct.price;
      // this.selectedProduct.imageUrl = this.newProduct.imageUrl;
      this.selectedProduct.description = this.newProduct.description;
      this.newProduct = new Product();
      this.router.navigateByUrl('product');
}
}
