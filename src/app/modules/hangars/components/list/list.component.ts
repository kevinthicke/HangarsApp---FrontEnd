import { animate, query, style, transition, trigger, group, stagger, animateChild, state } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HangarMinified } from '../../../../core/models/hangar/hangar-minified.model';
import { fade, fullFade } from '../../../../shared/animations/fade.animation';
import { fadeOutLeft } from '../../../../shared/animations/fade-out.animation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  animations: [ fullFade ]
})
export class ListComponent implements OnInit {

  @Input() hangarsMinified : HangarMinified[];
  @Input() hangarSelected  : HangarMinified;

  @Output() toPreviousPageEmitter  = new EventEmitter<void>();
  @Output() toNextPageEmitter      = new EventEmitter<void>();
  @Output() hangarSelectedEmitter  = new EventEmitter<HangarMinified>();
  @Output() moreButtonClickEmitter = new EventEmitter<void>();
  @Output() plusButtonClickEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void { }

  toPreviousPage(): void {
    this.toPreviousPageEmitter.emit();
  }

  toNextPage(): void {
    this.toNextPageEmitter.emit();
  }

  handleSelectHangar(hangarMinified: HangarMinified): void {
    this.hangarSelectedEmitter.emit(hangarMinified);
  }

  handleMoreButtonClick(event): void {
    event.preventDefault();
    event.stopPropagation();

    this.moreButtonClickEmitter.emit();
  }

  handlePlusButtonClick(): void {
    this.plusButtonClickEmitter.emit();
  }
}
