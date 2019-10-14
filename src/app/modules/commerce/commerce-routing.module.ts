import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommerceContainer } from './containers/commerce/commerce.container';

const routes: Routes = [
  {
      path: '',
      component: CommerceContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommerceRoutingModule {}
