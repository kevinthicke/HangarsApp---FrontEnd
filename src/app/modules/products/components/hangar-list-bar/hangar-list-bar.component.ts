import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HangarMinified } from '../../../../core/models/hangar/hangar-minified.model';
import { trigger, transition, style, query, animate, stagger } from '@angular/animations';

@Component({
  selector: 'app-hangar-list-bar',
  templateUrl: './hangar-list-bar.component.html',
  styleUrls: ['./hangar-list-bar.component.less'],
  animations: [
    trigger('hangarListBarAnimation', [
      transition(':enter', [
        query('li', [
          style({ transform: 'translateX(-50px)' }),
          stagger(200, [ animate('400ms ease-in', style({ transform: 'translateX(0px)'})) ])
        ])
      ])
    ])
  ]
})
export class HangarListBarComponent implements OnInit {

  @Input() hangarsMinified: HangarMinified[];
  @Output() hangarSelectedEmmiter = new EventEmitter<HangarMinified>();

  hangarSelectedIndex: number;

  ngOnInit(): void {

    this.hangarSelectedIndex = (this.hangarsMinified) ? this.hangarsMinified.length : null;

  }

  handleHangarSelectedClick(hangarMinified: HangarMinified, index: number) {

    this.hangarSelectedIndex = index;
    this.hangarSelectedEmmiter.emit(hangarMinified);

  }

}
