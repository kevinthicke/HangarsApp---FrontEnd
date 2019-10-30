import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HangarMinified } from '../../../../core/models/hangar/hangar-minified.model';
import { fade, fullFade } from '../../../../shared/animations/fade.animation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  animations: [ fullFade,
    trigger('hangar-list-animation', [
      transition(':enter', [
        query('li', [
          style({ transform: 'translateX(-50px)' }),
          animate(500)
        ])
      ])
    ])
   ]
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
