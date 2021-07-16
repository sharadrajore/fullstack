import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(value: IProduct[], args?: string): IProduct[] {

    args= args?args.toLocaleLowerCase():null
//OR
    // if(args.length >=0){
    //   args=args.toLocaleLowerCase()
    // }
    // else {
    //   args=null
    // }
    return args ? value.filter((product:IProduct)=>
    product.productName.toLocaleLowerCase()
    .indexOf(args)!==-1):value
  

   // return null;
  }

}
