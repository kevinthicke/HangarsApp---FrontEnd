import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/views/home/home.component';
import { AboutComponent } from './shared/views/about/about.component';
import { LoginComponent } from './security/views/login/login.component';
import { AuthGaurdService } from './security/services/auth-gaurd.service';
import { LogoutComponent } from './security/views/logout/logout.component';
import { RegisterComponent } from './security/views/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
