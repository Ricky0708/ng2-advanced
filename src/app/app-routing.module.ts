import { LoginRouteGuard } from './login-route-guard';
import { InputRouteGuard } from './input-route-guard';
import { LoginComponent } from './login/login.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, Route,  Routes,  RouterModule} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';

import { LayoutComponent } from './layout/layout.component';

import { fallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: 'form',   component: FormComponent },
      { path: 'reactiveform',   component: ReactiveformComponent },
      { path: 'dashboard',   component: DashboardComponent },
      { path: 'cards/:type', component: CardsComponent, canActivate: [LoginRouteGuard] },
      { path: 'charts/:username',
        loadChildren: './charts/charts.module#ChartsModule'
      }
    ]
  },
  { path: 'login',  component: LoginComponent, canDeactivate: [InputRouteGuard] },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
