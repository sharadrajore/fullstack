import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductPipe } from './product.pipe';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ProductRoutingModule } from './product-routing.module';
import { ProductEditComponent } from './product-edit.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductPipe,
    FilterPipe,
    ProductEditComponent
   
  ],
  imports: [     
    ReactiveFormsModule, 
    SharedModule,
    ProductRoutingModule
  ]
  
})
export class ProductModule { }
