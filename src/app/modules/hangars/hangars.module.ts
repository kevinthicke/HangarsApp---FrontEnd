import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { LateralNavbarComponent } from './components/lateral-navbar/lateral-navbar.component';
import { ListComponent } from './components/list/list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { HangarContainer } from './containers/hangar/hangar.container';
import { HangarsRoutingModule } from './hangars-routing.module';
import { HangarDetailsComponent } from './views/hangar-details/hangar-details.component';
import { HangarInsertComponent } from './views/hangar-insert/hangar-insert.component';
import { HangarListComponent } from './views/hangar-list/hangar-list.component';
import { HangarModifyComponent } from './views/hangar-modify/hangar-modify.component';
import { HangarSearchResultsComponent } from './views/hangar-search-results/hangar-search-results.component';
import { HangarsComponent } from './views/hangars/hangars.component';


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
    ProductFormComponent,
    HangarContainer,
    HangarsComponent
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
