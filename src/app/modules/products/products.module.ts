import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HangarListBarComponent } from './components/hangar-list-bar/hangar-list-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductContainer } from './containers/product/product.container';
import { ProductsComponent } from './views/products/products.component';
import { ProductCrudContainer } from './containers/product-crud/product-crud.container';
import { HangarListFormComponent } from './components/product-form/hangar-list-form/hangar-list-form.component';
import { QuantityCounterFormComponent } from './components/product-form/quantity-counter-form/quantity-counter-form.component';
import { CardDeckComponent } from './components/card-deck/card-deck.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CardDeckComponent,
    HangarListBarComponent,
    ProductContainer,
    ProductCrudContainer,
    ProductCrudComponent,
    HangarListFormComponent,
    QuantityCounterFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
