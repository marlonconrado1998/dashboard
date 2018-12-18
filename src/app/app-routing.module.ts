
// modules 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components 
import { AdminComponent } from './admin/admin.component';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { HomeComponent } from './home/home.component';
import { StadisticsComponent } from './stadistics/stadistics.component';
import { TechnicalVisitsComponent } from './technical-visits/technical-visits.component';
import { UserSessionComponent } from './user-session/user-session.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'catalogs', component: CatalogsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'stadistics', component: StadisticsComponent },
  { path: 'technical-visits', component: TechnicalVisitsComponent },
  { path: 'user-session', component: UserSessionComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
