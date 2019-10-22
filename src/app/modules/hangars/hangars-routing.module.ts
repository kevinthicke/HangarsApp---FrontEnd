import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HangarCrudContainer } from './container/hangar-crud/hangar-crud.container';
import { HangarContainer } from './containers/hangar/hangar.container';

const routes: Routes = [
  {
      path: '',
      component: HangarContainer
  },
  {
    path: 'details',
    component: HangarCrudContainer
  },
  {
    path: 'modify',
    component: HangarCrudContainer
  },
  {
    path: 'insert',
    component: HangarCrudContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HangarsRoutingModule {}
