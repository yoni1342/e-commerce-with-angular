import { Component, OnInit } from '@angular/core';
import { Customer, CUSTOMERS } from '../customer/customer.object';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  
  customers = CUSTOMERS;
  newCustomer = new Customer();
  constructor(private route: ActivatedRoute,private router: Router ) { }

  ngOnInit(): void {
  }
  add(){
    this.customers.push(this.newCustomer)
    this.router.navigateByUrl('/customer');
  }

}
