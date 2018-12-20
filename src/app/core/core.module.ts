
// modules 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from '../home/home.module';
import { AdminModule } from '../admin/admin.module';
import { CatalogsModule } from '../catalogs/catalogs.module';
import { StadisticsModule } from '../stadistics/stadistics.module';
import { TechnicalVisitsModule } from '../technical-visits/technical-visits.module';
import { UserSessionModule } from '../user-session/user-session.module';
import { UsersModule } from '../users/users.module';

// components
import { CoreComponent } from './core.component';

//routes 
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CoreRoutingModule,
    CommonModule,
    BrowserModule,
    HomeModule,
    AdminModule,
    CatalogsModule,
    StadisticsModule,
    TechnicalVisitsModule,
    UserSessionModule,
    UsersModule
  ]
})
export class CoreModule { }
