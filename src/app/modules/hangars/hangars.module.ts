import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangarListComponent } from './views/hangar-list/hangar-list.component';

import { HangarsRoutingModule } from './hangars-routing.module';
import { ListComponent } from './components/list/list.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { LateralNavbarComponent } from './components/lateral-navbar/lateral-navbar.component';
import { HangarDetailsComponent } from './views/hangar-details/hangar-details.component';
import { HangarModifyComponent } from './views/hangar-modify/hangar-modify.component';
import { HangarInsertComponent } from './views/hangar-insert/hangar-insert.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HangarSearchResultsComponent } from './views/hangar-search-results/hangar-search-results.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [
    HangarListComponent,
    ListComponent,
    LateralNavbarComponent,
    HangarDetailsComponent,
    HangarModifyComponent,
    HangarInsertComponent,
    FormComponent,
    HangarSearchResultsComponent,
    ProductFormComponent
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
