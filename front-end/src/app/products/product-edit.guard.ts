import { Injectable } from '@angular/core';

import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductEditComponent } from './product-edit.component';

@Injectable({
  providedIn: 'root'
})
export class ProductEditGuard implements
 CanDeactivate<ProductEditComponent> {
  canDeactivate(component:ProductEditComponent
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(component.productForm.dirty){
        const productName = component.productForm
        .get('productName').value || 'New Product'
        return confirm(`Navigate away  ${productName} ?`)
      }
    return true;
  }
  
}
