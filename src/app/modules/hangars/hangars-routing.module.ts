import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HangarListComponent } from './views/hangar-list/hangar-list.component';
import { HangarDetailsComponent } from './views/hangar-details/hangar-details.component';
import { HangarModifyComponent } from './views/hangar-modify/hangar-modify.component';
import { HangarInsertComponent } from './views/hangar-insert/hangar-insert.component';

const routes: Routes = [
  {
      path: '',
      component: HangarListComponent
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
