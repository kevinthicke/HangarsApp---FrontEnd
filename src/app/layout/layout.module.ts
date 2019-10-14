import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { ErrorServiceToastComponent } from './components/error-service-toast/error-service-toast.component';
import { ShoppingCartButtonComponent } from './components/shopping-cart-button/shopping-cart-button.component';
import { MainComponent } from './shell/main/main.component';
import { NavbarComponent } from './shell/navbar/navbar.component';
import { ShellComponent } from './shell/shell.component';
import { NavbarContainer } from './containers/navbar/navbar.container';


@NgModule({
  declarations: [
    NavbarComponent,
    NavbarContainer,
    MainComponent,
    ShellComponent,
    ErrorServiceToastComponent,
    ShoppingCartButtonComponent
  ],
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
