
// modules 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components 
import { CoreComponent } from './core/core.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/core', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'core',  component: CoreComponent, children: [
      {
        path: '',
        loadChildren: "./core/core-routing.module#CoreRoutingModule"
      }
    ]
  },
  { path: '**', redirectTo: '/core' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
