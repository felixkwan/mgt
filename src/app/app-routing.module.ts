import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ThemesComponent } from './components/themes/themes.component';
import { SupportComponent } from './components/support/support.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'themes',
    component: ThemesComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'privacy',
    pathMatch: 'full',
    component: PrivacyComponent
  },
  {
    path: 'terms',
    pathMatch: 'full',
    component: TermsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
