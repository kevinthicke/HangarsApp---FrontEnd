import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Hangar } from '../../../../core/models/hangar.model';

@Component({
  selector: 'app-lateral-navbar',
  templateUrl: './lateral-navbar.component.html',
  styleUrls: ['./lateral-navbar.component.less'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('600ms ease-out')
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('600ms ease-out')
      ])
    ])
  ]
})
export class LateralNavbarComponent implements OnInit, OnChanges {
  @Input() render: boolean;
  @Input() hangar: Hangar;
  @Output() hangarEvent = new EventEmitter<Hangar>();
  @Output() closeNavBarEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    const [ changesKey ] = Object.keys(changes);

    if (changesKey === 'render') {
      this.render = changes.render.currentValue;
    }

  }

  emitDelete(): void {
    this.hangarEvent.emit(this.hangar);
  }

  close(): void {
    this.closeNavBarEmitter.emit();
    this.render = false;
  }

}
