import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HangarService } from '../../../../core/services/hangar.service';

@Component({
  selector: 'app-hangar-list-bar',
  templateUrl: './hangar-list-bar.component.html',
  styleUrls: ['./hangar-list-bar.component.less']
})
export class HangarListBarComponent implements OnInit {

  @Input() hangarsName: string[];
  @Output() hangarSelectedNameEmmiter = new EventEmitter<string>();

  item = -1;

  ngOnInit(): void { }

  handleHangarSelectedClick(hangarName: string, i: number) {
    this.item = i;
    this.hangarSelectedNameEmmiter.emit(hangarName);
  }

  handleSelectAllProducts() {
    this.item = -1;
    this.hangarSelectedNameEmmiter.emit(null);
  }

}
