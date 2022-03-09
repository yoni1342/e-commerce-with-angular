import { Component, OnInit } from '@angular/core';
import { Customer, CUSTOMERS } from './customer.object';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  // customer: Customer={
  //   id:1,
  //   name: 'Helen',
  //   age: 23,
  //   imageUrl: '../../assets/cast1.png',
  //   location: 'Ethiopia'
  // }
  customerList = CUSTOMERS;
  constructor() { }

  ngOnInit(): void {
  }

}
