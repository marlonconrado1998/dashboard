
// modules 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module'; 

// components
import { HomeComponent } from './home.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [ItemComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {  }
