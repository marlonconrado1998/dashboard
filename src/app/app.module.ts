
// modules 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

// components 
import { AppComponent } from './app.component';

// providers 
import { UserSessionService } from './user-session/shared/user-session.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule
  ],
  providers: [UserSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
