import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { ProductInsertComponent } from './views/product-insert/product-insert.component';
import { ProductModifyComponent } from './product-modify/product-modify.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'details',
    component: ProductDetailsComponent
  },
  {
    path: 'insert',
    component: ProductInsertComponent
  },
  {
    path: 'modify',
    component: ProductModifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
