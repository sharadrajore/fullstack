import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit  {
pageTitle:string="Product List";
imgHt:number=50
imgWdt:number=50
showImage:boolean=false
listFilter:string
products:IProduct[]
product:IProduct
errorMessage:string

  constructor(private _productService:ProductService) { }

  ngOnInit() {
    //the below line is without observables
   //this.products=this.productService.getProducts()

   //Subscribing to an Observable
     this._productService.getProducts()
     .subscribe(
       (products)=>this.products=products,
        (error)=>this.errorMessage=<any>error
     )
            //OR

// this._productService.getProducts()
// .subscribe({next:(products:IProduct[])=>this.products=products},
//             {error:(e)=>this.errorMessage=<any>e}
// )

      console.log('The init method is called....')

  }
  hideShowImg():void{
    this.showImage = !this.showImage
  }

  ratingClicked(msg:string){
    this.pageTitle = msg

  }
 /* deleteProduct():void{
    // if(this.product.productId === 0){
    //   this.onSaveComplete()
    // }
    //else{
      if(confirm(`Really want to
     delete:${this.product.productName}`)){
       this._productService.
       deleteProduct(this.product.productId)
       .subscribe({
         next:()=>console.log('Deleted.....'),
         error:err=>this.errorMessage=err
       })
     }
  }*/


}
