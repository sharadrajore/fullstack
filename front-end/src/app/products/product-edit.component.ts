import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NumberValidators } from '../shared/number-validators';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
productForm:FormGroup
product:IProduct
addRec:number
pageTitle:string='Product Edit'
errorMessage:string=''
sub:Subscription
  constructor(private _formBuilder:FormBuilder,
    private _activatedRoute:ActivatedRoute,
    private _productService:ProductService,
    private _router:Router    ) { }
  ngOnInit() {
     //FormBuilder
     this.productForm=this._formBuilder.group({
      productId:['0'], //productId added to the formBuilder group
     productName:['',[Validators.required,
     Validators.minLength(3),
     Validators.maxLength(20)]],
     productCode:['',Validators.required],
     releaseDate:[''],
     description:[''],
     price:['',Validators.min(1)],
     starRating:['',NumberValidators.range(1,5)],
     imageUrl:['']
     })
//accessing the id for edit
this.sub = this._activatedRoute.paramMap

.subscribe(params=>{
  const id = +params.get('id')
  this.addRec=id   //new variable addRec pointing to id
  if(id!==0){      //changed to not equal to Id
  this.getProduct(id)
  }
 
  
})

   
  } //close of ngOnInit method
 
  save():void{
      if(this.productForm.valid){
        if(this.productForm.dirty){
          const p = {...this.product,...this.productForm.value}
          if(p===0){
           

          }else{
            if(this.addRec ===0){ //new line
              this._productService.createProduct(p)
              .subscribe({
                next:()=>this.onSaveComplete(),
                error:(err)=>this.errorMessage=err
              })
            }else{
            this._productService.updateProduct(p)
            .subscribe({
              next:()=>this.onSaveComplete(),
              error:err=>this.errorMessage=err
            })
          }
          }
        }   
          
        
      }
    }

    //removed from edit component and added in
    //product list component
     deleteProduct():void{
      // if(this.product.productId === 0){
      //   this.onSaveComplete()
      // }
      //else{
        if(confirm(`Really want to
       delete:${this.product.productName}`)){
         this._productService.
         deleteProduct(this.product.productId)
         .subscribe({
           next:()=>this.onSaveComplete(),
           error:err=>this.errorMessage=err
         })
       }
     }
  
      
  
  onSaveComplete():void{
    alert('data saved.....')
   
    this.productForm.reset()
    this._router.navigate(['/products'])
  }
  getProduct(id:number){
    if(id){    //checked for existence of id
    
      this._productService.getProduct(id)
      .subscribe({
        next:(product:IProduct)=>this
        .displayProduct(product),
        error:err=>this.errorMessage=err
      })
    }
  }
  displayProduct(product:IProduct){
      if(this.productForm){
        this.productForm.reset()
      }
      this.product =product
      if(this.product.productId===0){
        this.pageTitle='Add Product:'

      }else{
        this.pageTitle=`Edit Product:
         ${this.product.productName}`
      }
     this.productForm.setValue({ 
       productId:this.product.productId,  //added productId   
       productName:this.product.productName,
       productCode:this.product.productCode,
       releaseDate:this.product.releaseDate,
       description:this.product.description,
       price:this.product.price,
       starRating:this.product.starRating,
       imageUrl:this.product.imageUrl
     })
  }

}

