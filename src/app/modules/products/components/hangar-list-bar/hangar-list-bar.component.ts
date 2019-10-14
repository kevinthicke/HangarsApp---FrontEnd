import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HangarMinified } from '../../../../core/models/hangar/hangar-minified.model';

@Component({
  selector: 'app-hangar-list-bar',
  templateUrl: './hangar-list-bar.component.html',
  styleUrls: ['./hangar-list-bar.component.less']
})
export class HangarListBarComponent implements OnInit {

  @Input() hangarsMinified: HangarMinified[];
  @Output() hangarSelectedEmmiter = new EventEmitter<HangarMinified>();

  hangarSelectedIndex: number;

  ngOnInit(): void {

    this.hangarSelectedIndex = (this.hangarsMinified) ? this.hangarsMinified.length: null;

  }

  handleHangarSelectedClick(hangarMinified: HangarMinified, index: number) {
    
    this.hangarSelectedIndex = index;
    this.hangarSelectedEmmiter.emit(hangarMinified);

  }

}
