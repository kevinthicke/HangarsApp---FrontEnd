import { CommonModule } from '@angular/common';
import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { InputFormComponent } from '../shared/components/form/input-form/input-form.component';
import { AuxNavbarComponent } from './components/aux-navbar/aux-navbar.component';
import { CircleButtonAuxComponent } from './components/buttons/circle-button-aux/circle-button-aux.component';
import { CircleButtonComponent } from './components/buttons/circle-button/circle-button.component';
import { NavigationListCartComponent } from './components/navigation-list-cart/navigation-list-cart.component';
import { PrimaryCardComponent } from './components/primary-card/primary-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ToastComponent } from './components/toast/toast.component';
import { ButtonTypeDirective } from './directives/button-type.directive';
import { HomeComponent } from './views/home/home.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { ClickOutSideDirective } from './directives/click-outside.directive';
import { InputComponent } from './components/form/input/input.component';

@NgModule({
  declarations: [
    CircleButtonComponent,
    CircleButtonAuxComponent,
    HomeComponent,
    SearchBarComponent,
    PrimaryCardComponent,
    ButtonComponent,
    AuxNavbarComponent,
    ToastComponent,
    NavigationListCartComponent,
    InputFormComponent,
    ButtonTypeDirective,
    ClickOutSideDirective,
    InputComponent
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
    ButtonComponent,
    AuxNavbarComponent,
    ToastComponent,
    InputFormComponent,
    InputComponent,
    ButtonTypeDirective
  ]
})
export class SharedModule {}
