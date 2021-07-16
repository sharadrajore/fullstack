import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StarComponent
  ],
 
  exports:[StarComponent,FormsModule,CommonModule]
})
export class SharedModule { }
