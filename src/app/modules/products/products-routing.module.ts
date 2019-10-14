import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCrudContainer } from './containers/product-crud/product-crud.container';
import { ProductContainer } from './containers/product/product.container';

const routes: Routes = [
  {
    path: '',
    component: ProductContainer
  },
  {
    path: 'details/:id',
    component: ProductCrudContainer
  },
  {
    path: 'insert',
    component: ProductCrudContainer
  },
  {
    path: 'modify/:id',
    component: ProductCrudContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
