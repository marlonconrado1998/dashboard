
// modules 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
