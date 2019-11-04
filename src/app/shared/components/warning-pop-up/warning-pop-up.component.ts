import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-warning-pop-up',
  templateUrl: './warning-pop-up.component.html',
  styleUrls: ['./warning-pop-up.component.less']
})
export class WarningPopUpComponent implements OnInit {

  @Output() leftButtonClickEmitter  = new EventEmitter<void>();
  @Output() rightButtonClickEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void { }

  handleLeftButtonClick(): void {
    this.leftButtonClickEmitter.emit();
  }

  handleRightButtonClick(): void {
    this.rightButtonClickEmitter.emit();
  }
}
