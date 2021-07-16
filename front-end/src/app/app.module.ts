import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'



import{HttpClientModule} from '@angular/common/http'

import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test/test1.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerFormComponent } from './customers/customer-form.component';
import { CustomerReactComponent } from './customers/customer-react.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,       
    HomeComponent,
    SidebarComponent,
    CustomerFormComponent,
    CustomerReactComponent
  ],
  imports: [
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,     
    ProductModule,       
   AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
