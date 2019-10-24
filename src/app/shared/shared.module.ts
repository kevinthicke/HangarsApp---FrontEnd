import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { InputFormComponent } from '../shared/components/form/input-form/input-form.component';
import { AuxNavbarComponent } from './components/aux-navbar/aux-navbar.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { CircleButtonAuxComponent } from './components/buttons/circle-button-aux/circle-button-aux.component';
import { CircleButtonComponent } from './components/buttons/circle-button/circle-button.component';
import { InputComponent } from './components/form/input/input.component';
import { NavigationListCartComponent } from './components/navigation-list-cart/navigation-list-cart.component';
import { PrimaryCardComponent } from './components/primary-card/primary-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ToastComponent } from './components/toast/toast.component';
import { ButtonTypeDirective } from './directives/button-type.directive';
import { ClickOutSideDirective } from './directives/click-outside.directive';
import { HomeComponent } from './views/home/home.component';
import { HoverDirective } from './directives/hover.directive';
import { SmallToastComponent } from './components/small-toast/small-toast.component';

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
    InputComponent,
    HoverDirective,
    SmallToastComponent
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
    SmallToastComponent,
    ButtonTypeDirective,
    HoverDirective
  ]
})
export class SharedModule {}
