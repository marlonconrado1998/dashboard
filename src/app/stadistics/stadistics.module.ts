
// modules 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { StadisticsComponent } from './stadistics.component';

@NgModule({
  declarations: [StadisticsComponent],
  imports: [
    CommonModule
  ],
  exports: [StadisticsComponent]
})
export class StadisticsModule { }
