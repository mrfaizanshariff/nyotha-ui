import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
// import { InvitationsPageComponent } from './pages/invitations-page/invitations-page.component';
import { SamplePagesComponent } from './pages/sample-pages/sample-pages.component';
import { CustomerRegPageComponent } from './pages/customer-reg-page/customer-reg-page.component';
import { FormsModule } from '@angular/forms';
import { InvitationsComponent } from './pages/invitations/invitations.component';
import { Template001Component } from './pages/templates/template001/template001.component';
import { Template002Component } from './pages/templates/template002/template002.component';
import { DynamicTemplateDirective } from './shared/directives/dynamic-template.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SamplePagesComponent,
    CustomerRegPageComponent,
    InvitationsComponent,
    Template001Component,
    Template002Component,
    DynamicTemplateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
