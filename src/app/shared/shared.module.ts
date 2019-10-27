import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { InputFormComponent } from '../shared/components/form/input-form/input-form.component';
import { AuxNavbarComponent } from './components/aux-navbar/aux-navbar.component';
import { ButtonComponent } from './components/buttons/button/button.component';
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
import { CardComponent } from './components/card/card.component';
import { LimitCharactersPipe } from '../shared/pipes/limit-characters.pipe';

@NgModule({
  declarations: [
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
    SmallToastComponent,
    CardComponent,
    LimitCharactersPipe
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    NavigationListCartComponent,
    ButtonComponent,
    AuxNavbarComponent,
    ToastComponent,
    InputFormComponent,
    InputComponent
    ,
    SmallToastComponent,
    CardComponent,
    ButtonTypeDirective,
    HoverDirective,
    LimitCharactersPipe
  ]
})
export class SharedModule {}
