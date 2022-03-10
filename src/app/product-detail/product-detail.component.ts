import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from '../product/product.object';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param=>{
        for(let product of this.products){
          if(product.id == param['id']){
            this.selectedProduct = product;
          }
        }
      }
      )
    }
    products=PRODUCTS;
    selectedProduct = new Product()

    editProduct(id: number){
      this.router.navigateByUrl('/product/edit/'+ id);
    }
}
