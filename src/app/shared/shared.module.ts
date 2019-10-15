import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuxNavbarComponent } from './components/aux-navbar/aux-navbar.component';
import { CircleButtonAuxComponent } from './components/buttons/circle-button-aux/circle-button-aux.component';
import { CircleButtonComponent } from './components/buttons/circle-button/circle-button.component';
import { RectangleButtonComponent } from './components/buttons/rectangle-button/rectangle-button.component';
import { SecondaryButtonComponent } from './components/buttons/secondary-button/secondary-button.component';
import { NavigationListCartComponent } from './components/navigation-list-cart/navigation-list-cart.component';
import { PrimaryCardComponent } from './components/primary-card/primary-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ToastComponent } from './components/toast/toast.component';
import { HomeComponent } from './views/home/home.component';
import { InputFormComponent } from '../shared/components/form/input-form/input-form.component';

@NgModule({
  declarations: [
    CircleButtonComponent,
    CircleButtonAuxComponent,
    HomeComponent,
    SearchBarComponent,
    SecondaryButtonComponent,
    PrimaryCardComponent,
    RectangleButtonComponent,
    AuxNavbarComponent,
    ToastComponent,
    NavigationListCartComponent,
    InputFormComponent
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
    RectangleButtonComponent,
    SecondaryButtonComponent,
    AuxNavbarComponent,
    ToastComponent,
    InputFormComponent
  ]
})
export class SharedModule {}
