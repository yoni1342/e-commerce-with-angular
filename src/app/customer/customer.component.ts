import { Component, OnInit } from '@angular/core';
import { Customer, CUSTOMERS } from './customer.object';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  editCustomer(id: number){
    this.router.navigateByUrl('/customer/edit/' + id); 
  }
  deleteCustomer(id:number){
    this.customerList.forEach((value,index)=>{
      if(value.id==id){
        this.customerList.splice(index,1);
      }
  });
  }
  addCustomer(){
    this.router.navigateByUrl('/customer/add');
  }
  delCustomer = new Customer();
  customerList = CUSTOMERS;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
