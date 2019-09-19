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

  hangarSelectedIndex: number;

  ngOnInit(): void {
    this.hangarSelectedIndex = this.hangarsName.length;
  }

  handleHangarSelectedClick(hangarName: string, index: number) {

    this.hangarSelectedIndex = index;

    this.hangarSelectedNameEmmiter.emit(hangarName);

  }

  trackByFn(index: number, hangarName: string): string {
    return hangarName;
  }


  /* handleSelectAllProducts() {
  //  this.item = -1;
    this.hangarSelectedNameEmmiter.emit(null);
  } */

  
}
