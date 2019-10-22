import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HangarContainer } from './containers/hangar/hangar.container';
import { HangarDetailsComponent } from './views/hangar-details/hangar-details.component';
import { HangarInsertComponent } from './views/hangar-insert/hangar-insert.component';
import { HangarModifyComponent } from './views/hangar-modify/hangar-modify.component';

const routes: Routes = [
  {
      path: '',
      component: HangarContainer
  },
  {
    path: 'details',
    component: HangarDetailsComponent
  },
  {
    path: 'modify',
    component: HangarModifyComponent
  },
  {
    path: 'insert',
    component: HangarInsertComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HangarsRoutingModule {}
