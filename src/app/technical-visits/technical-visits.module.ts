
// modules 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { TechnicalVisitsComponent } from './technical-visits.component';

@NgModule({
  declarations: [TechnicalVisitsComponent],
  imports: [
    CommonModule
  ],
  exports: [TechnicalVisitsComponent]
})
export class TechnicalVisitsModule { }
