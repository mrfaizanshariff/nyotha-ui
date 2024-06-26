import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { InvitationsPageComponent } from './pages/invitations-page/invitations-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    InvitationsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
