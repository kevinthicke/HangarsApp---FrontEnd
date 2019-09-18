import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductInsertComponent } from './views/product-insert/product-insert.component';
import { HangarListBarComponent } from './components/hangar-list-bar/hangar-list-bar.component';
import { CardDeckComponent } from './components/card-deck/card-deck.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { ProductModifyComponent } from './product-modify/product-modify.component';
import { ProductContainerComponent } from './containers/product-container.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductInsertComponent,
    HangarListBarComponent,
    CardDeckComponent,
    FormComponent,
    ProductModifyComponent,
    ProductContainerComponent
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
