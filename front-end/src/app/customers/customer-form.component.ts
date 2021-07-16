import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
customer= new Customer()
  constructor() { }

  ngOnInit() {
  }
  saveForm(customerForm:NgForm){
    console.log(customerForm.form)
    console.log('Saved:' 
    +JSON.stringify(customerForm.value))

  }

}
