import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { NavbarComponent } from './shell/navbar/navbar.component';
import { MainComponent } from './shell/main/main.component';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { ErrorServiceToastComponent } from './components/error-service-toast/error-service-toast.component';
import { ShoppingCartButtonComponent } from './components/shopping-cart-button/shopping-cart-button.component';

@NgModule({
  declarations: [NavbarComponent, MainComponent, ShellComponent, ErrorServiceToastComponent, ShoppingCartButtonComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TranslateModule
  ],
  exports: [
    ShellComponent
  ]
})
export class LayoutModule { }
