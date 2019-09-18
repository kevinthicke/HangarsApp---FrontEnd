import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainer } from './containers/product.container';
import { ProductModifyComponent } from './product-modify/product-modify.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { ProductInsertComponent } from './views/product-insert/product-insert.component';

const routes: Routes = [
  {
    path: '',
    component: ProductContainer
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
