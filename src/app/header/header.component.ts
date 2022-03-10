import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import {CART} from '../cart/cart.object'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Cart = CART;
  cart(){
    this.router.navigateByUrl('/product/cart')
  }
  addProduct(){
    this.router.navigateByUrl('/product/add');
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
