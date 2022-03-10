import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer, CUSTOMERS } from '../customer/customer.object';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  selectedCustomer = new Customer();
  customers = CUSTOMERS;
  newCustomer = new Customer();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param=>{
        for(let customer of this.customers){
          if(customer.id == param['id']){
            this.selectedCustomer = customer;
          }
        }
      }
    )
  }
  update(){
    this.selectedCustomer.name = this.newCustomer.name;
    this.selectedCustomer.imageUrl = this.newCustomer.imageUrl;
    this.selectedCustomer.duration = this.newCustomer.duration;
    this.selectedCustomer.age = this.newCustomer.age;
    this.selectedCustomer.location = this.newCustomer.location;
    this.newCustomer = new Customer();
  }
}
