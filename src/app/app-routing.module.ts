import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainer } from './security/containers/login/login.container';
import { RegisterContainer } from './security/containers/register/register.container';
import { AuthGaurdService } from './security/services/auth-gaurd.service';
import { LogoutComponent } from './security/views/logout/logout.component';
import { HomeComponent } from './shared/views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'login',
    component: LoginContainer
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'register',
    component: RegisterContainer
  },
  {
    path: 'hangars',
    loadChildren: () => import('./modules/hangars/hangars.module').then(module => module.HangarsModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(module => module.ProductsModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'commerce',
    loadChildren: () => import('./modules/commerce/commerce.module').then(module => module.CommerceModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
