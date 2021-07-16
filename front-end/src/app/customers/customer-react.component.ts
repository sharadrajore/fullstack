import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { FormGroup, FormControl, FormBuilder,
   Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-react',
  templateUrl: './customer-react.component.html',
  styleUrls: ['./customer-react.component.css']
})
export class CustomerReactComponent implements OnInit {
customer= new Customer()
customerForm:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    //USING FORM GROUP
    // this.customerForm=new FormGroup({
    //   firstName:new FormControl(),
    //   lastName:new FormControl(),
    //   email:new FormControl()
    // })

    //USING FORMBUILDER service
    this.customerForm= this.fb.group({
      firstName:['',[Validators.required,
        Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.maxLength(20)]],
      email:['',
      Validators.pattern('[a-z0-9.%+-]+@[a-z0-9.-]+')]

    })
  
    
  }
  saveForm(){
    console.log(this.customerForm)
    console.log(`Saved : ${JSON.stringify(this.customerForm.value)}`)
  }
  getDataOfForm(){
    this.customerForm.setValue({
      email:'sdsad@dsd',
      firstName:'Lucian',
      lastName:'Apples'

    })
  }

}
