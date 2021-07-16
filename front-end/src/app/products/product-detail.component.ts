import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from './product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
pageTitle:string='Product Detail...'
product:IProduct
errorMessage:string
  constructor(private _productService:ProductService,
    private _router:Router,
    private _activatedRoute:ActivatedRoute
  
    ) { }

  ngOnInit() {
    //this.product=  this._productService.getProduct(1)

    //accessing route parameters with ActivateRoute service
    const param = +this._activatedRoute.snapshot
    .paramMap.get('id')
    if(param){
     this._productService.getProduct(param)
    .subscribe({
     next: (product)=>this.product=product,
     error: (error)=>this.errorMessage=<any>error
    })
    }
  }
  onBack(){
    this._router.navigate(['/products'])
  }

}
