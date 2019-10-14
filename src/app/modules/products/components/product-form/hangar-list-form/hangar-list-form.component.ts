import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HangarMinified } from '../../../../../core/models/hangar/hangar-minified.model';

@Component({
  selector: 'app-hangar-list-form',
  templateUrl: './hangar-list-form.component.html',
  styleUrls: ['./hangar-list-form.component.less']
})
export class HangarListFormComponent implements OnInit {

  @Input() hangarsMinified: HangarMinified[];
  @Input() hangarSelectedId: number;

  @Output() hangarSelectedIdEmitter = new EventEmitter<HangarMinified>();

  isEnabled: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isEnabled = this.hangarSelectedId === undefined;
  }

  selectHangar(hangar: HangarMinified): void {
    this.hangarSelectedIdEmitter.emit(hangar);
  }

}
