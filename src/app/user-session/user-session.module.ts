
// modules 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { UserSessionComponent } from './user-session.component';

@NgModule({
  declarations: [UserSessionComponent],
  imports: [
    CommonModule
  ],
  exports: [UserSessionComponent]
})
export class UserSessionModule { }
