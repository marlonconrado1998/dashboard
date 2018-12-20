// modules 
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// components 
import { AdminComponent } from './../admin/admin.component';
import { CatalogsComponent } from './../catalogs/catalogs.component';
import { HomeComponent } from './../home/home.component';
import { StadisticsComponent } from './../stadistics/stadistics.component';
import { TechnicalVisitsComponent } from './../technical-visits/technical-visits.component';
import { UsersComponent } from './../users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'catalogs', component: CatalogsComponent },
  { path: 'stadistics', component: StadisticsComponent },
  { path: 'technical-visits', component: TechnicalVisitsComponent },
  { path: 'users', component: UsersComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CoreRoutingModule { }