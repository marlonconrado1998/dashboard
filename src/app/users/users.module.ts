// modules 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components 
import { UsersComponent } from './users.component';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
