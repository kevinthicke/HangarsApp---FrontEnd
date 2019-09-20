import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

}
