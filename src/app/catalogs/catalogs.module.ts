
// modules 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { CatalogsComponent } from './catalogs.component';

@NgModule({
  declarations: [CatalogsComponent],
  imports: [
    CommonModule
  ],
  exports: [CatalogsComponent]
})
export class CatalogsModule { }
