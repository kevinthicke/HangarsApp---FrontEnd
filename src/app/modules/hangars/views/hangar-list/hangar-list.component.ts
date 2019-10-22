import { Component, Input, OnInit } from '@angular/core';
import { HangarMinified } from '../../../../core/models/hangar/hangar-minified.model';

@Component({
  selector: 'app-hangar-list',
  templateUrl: './hangar-list.component.html',
  styleUrls: ['./hangar-list.component.less']
})
export class HangarListComponent implements OnInit {
  @Input() hangarsMinified$: HangarMinified[];

  constructor() { }

  ngOnInit(): void { }

}
