import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { CustomerFormComponent } from './customers/customer-form.component';
import { CustomerReactComponent } from './customers/customer-react.component';



@NgModule({
    imports:[
        RouterModule.forRoot([      
            {path:'home',component:HomeComponent},
            {path:'customers', 
            component:CustomerFormComponent},  
            {path:'customersreact',
            component:CustomerReactComponent},    
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**',redirectTo:'home',pathMatch:'full'}   
      
          ])
    ],
    exports:[RouterModule]

})


export class AppRoutingModule{}