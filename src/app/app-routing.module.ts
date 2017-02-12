import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { Page2Component } from './page2/page2.component';

import { fallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  { path: '',         redirectTo: '/layout',  pathMatch: 'full' },
  { path: 'layout',   component: LayoutComponent },
  { path: 'page2',    component: Page2Component },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
