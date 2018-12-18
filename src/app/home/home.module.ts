
// modules 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HomeComponent } from './home.component';
import { ItemRouterComponent } from './item-router/item-router.component';

@NgModule({
  declarations: [ItemRouterComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
