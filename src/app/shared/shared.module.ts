import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleButtonComponent } from './components/buttons/circle-button/circle-button.component';
import { CircleButtonAuxComponent } from './components/buttons/circle-button-aux/circle-button-aux.component';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SecondaryButtonComponent } from './components/buttons/secondary-button/secondary-button.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PrimaryCardComponent } from './components/primary-card/primary-card.component';
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';
import { AuxNavbarComponent } from './components/aux-navbar/aux-navbar.component';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './components/toast/toast.component';
import { NavigationListCartComponent } from './components/navigation-list-cart/navigation-list-cart.component';

@NgModule({
  declarations: [
    CircleButtonComponent,
    CircleButtonAuxComponent,
    HomeComponent,
    AboutComponent,
    SearchBarComponent,
    SecondaryButtonComponent,
    PrimaryCardComponent,
    PrimaryButtonComponent,
    AuxNavbarComponent,
    ToastComponent,
    NavigationListCartComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CircleButtonComponent,
    CircleButtonAuxComponent,
    NavigationListCartComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    AuxNavbarComponent,
    ToastComponent
  ]
})
export class SharedModule {}
