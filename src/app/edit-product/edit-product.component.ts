import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from '../product/product.object';
// import  productData from '../produt.json';

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
            console.log(product)
        }
      }
  }
  )

}
update(){
      this.selectedProduct.title = this.newProduct.title;
      this.selectedProduct.price = this.newProduct.price;
      this.selectedProduct.image = this.newProduct.image;
      this.selectedProduct.description = this.newProduct.description;
      this.selectedProduct.category = this.newProduct.category;
      this.newProduct = new Product();
      // this.router.navigateByUrl('/product/detail/ + this.slected');
}
}
