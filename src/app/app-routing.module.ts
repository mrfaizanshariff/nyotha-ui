import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SamplePagesComponent } from './pages/sample-pages/sample-pages.component';
import { CustomerRegPageComponent } from './pages/customer-reg-page/customer-reg-page.component';
import { InvitationsComponent } from './pages/invitations/invitations.component';

const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path: 'sample', component:SamplePagesComponent},
  {path: 'customer-reg', component:CustomerRegPageComponent},
  { path: ':id', component: InvitationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
