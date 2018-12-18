
// modules 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { StadisticsModule } from './stadistics/stadistics.module';
import { TechnicalVisitsModule } from './technical-visits/technical-visits.module';
import { UserSessionModule } from './user-session/user-session.module';
import { UsersModule } from './users/users.module';

// components 
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeModule,
    AdminModule,
    CatalogsModule,
    StadisticsModule,
    TechnicalVisitsModule,
    UserSessionModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
