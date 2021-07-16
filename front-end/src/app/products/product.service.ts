import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Observable, observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {map,tap,catchError} from 'rxjs/operators'

@Injectable({
  providedIn:'root'
})
//before version 5

//@Injectable()
export class ProductService {
  products:IProduct[]
  //productUrl:string="assets/api/products/products.json"
  productUrl:string='http://localhost:8080/api/v1/products'
  

  constructor(private _httpClient:HttpClient) { }
//Without observables
  // getProducts():IProduct[]{
  //   return this.products
  // }

  //With Observables
  getProducts():Observable<IProduct[]>{
    //console.log(this._httpClient.get<IProduct[]>(this.productUrl).toPromise())
   return this._httpClient.get<IProduct[]>
   (this.productUrl)
   .pipe(
     tap(data=>
      console.log('All Products :' + JSON.stringify(data))),
      catchError(this.handleError)
   )
  }
  //Without observables
  /*getProduct(id:number){
    return this.products.find((product)=>product
    .productId===id)
  }*/

  //With Observables returning all products and then
  //finding the required Product with id
  // getProduct(id:number):Observable<IProduct>{
  //   return this.getProducts()
  //  // return this._httpClient.get<IProduct>(this.productUrl+id)
  // .pipe(
  //   map((products:IProduct[])=>products
  //   .find((p)=>p.productId===id)),
  //   tap(data=>console.log('Single Product :' +JSON.stringify(data))),
  //   catchError(this.handleError)
  //   )  }


  getProduct(id:number):Observable<IProduct>{
    if(id===0){
      
    
    }
    const url = `${this.productUrl}/${id}`
    return this._httpClient.get<IProduct>(url)
    .pipe(
      tap(data=>console.
        log(`Single Product : ${JSON.stringify(data)}`)),
        catchError(this.handleError)
    )
  }
  updateProduct(product:IProduct):Observable<IProduct>{
   // debugger
    const headers=
    new HttpHeaders({'Content-Type':'application/json'})
  const url =`${this.productUrl}/${product.productId}`
    return this._httpClient.
    put<IProduct>(url,product,{headers})
    .pipe(tap(()=>console
    .log(`Update Product: ${product.productId}`)),
    //map(()=>product),
    catchError(this.handleError)
    )
  }
  createProduct(product:IProduct):Observable<IProduct>{
    const headers = new 
    HttpHeaders({'Content-Type':'application/json'})
    //product.productId=null
    return this._httpClient.
    post<IProduct>(this.productUrl,product,
    {headers})
    .pipe(
      tap((data)=>console.log(`New Product Added: 
      ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    )
  }
  deleteProduct(id:number):Observable<{}>{
    const headers = new 
    HttpHeaders({'Content-Type':'application/json'})
    const url=`${this.productUrl}/${id}`
    return this._httpClient.delete<IProduct>(url,
      {headers:headers})
  }

   private handleError(err:HttpErrorResponse){
      console.log(err)
      return Observable.throw(err.message)
   } 

 

}
