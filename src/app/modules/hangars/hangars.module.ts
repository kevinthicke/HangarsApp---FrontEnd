import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { LateralNavbarComponent } from './components/lateral-navbar/lateral-navbar.component';
import { ListComponent } from './components/list/list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { HangarContainer } from './containers/hangar/hangar.container';
import { HangarsRoutingModule } from './hangars-routing.module';
import { HangarsComponent } from './views/hangars/hangars.component';
import { HangarCrudContainer } from './container/hangar-crud/hangar-crud.container';
import { HangarCrudComponent } from './views/hangar-crud/hangar-crud.component';

@NgModule({
  declarations: [
    ListComponent,
    LateralNavbarComponent,
    ProductFormComponent,
    HangarContainer,
    HangarsComponent,
    HangarCrudContainer,
    HangarCrudComponent,
  ],
  imports: [
    CommonModule,
    HangarsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule
  ]
})
export class HangarsModule { }
