import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product, PRODUCTS} from './product.object';
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
productList = PRODUCTS;
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
  constructor(private router: Router ) {}
  
  
  ngOnInit(): void {
  }

}
