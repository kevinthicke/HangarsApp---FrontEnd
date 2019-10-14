import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import { CommerceRoutingModule } from './commerce-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommerceContainer } from './containers/commerce/commerce.container';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    CommerceContainer
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CommerceRoutingModule,
    SharedModule
  ]
})
export class CommerceModule { }
