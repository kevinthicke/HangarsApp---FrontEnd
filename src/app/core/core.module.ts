import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DisableControlDirective } from './directives/disable-control.directive';


@NgModule({
  declarations: [DisableControlDirective],
  imports: [
    CommonModule
  ],
  exports: []
})
export class CoreModule { }
