import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { HangarMinified } from '../../../../core/models/hangar/hangar-minified.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hangars',
  templateUrl: './hangars.component.html',
  styleUrls: ['./hangars.component.less']
})
export class HangarsComponent implements OnInit {

  @Input() hangarsMinified : HangarMinified[];
  @Input() hangarSelected  : HangarMinified;

  @Output() toPreviousPageEmitter = new EventEmitter<void>();
  @Output() toNextPageEmitter     = new EventEmitter<void>();
  @Output() hangarSelectedEmitter = new EventEmitter<HangarMinified>();
  @Output() deleteHangarEmitter   = new EventEmitter<void>();

  showLateralNavbar: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void  { }

  handleToPreviousPage(): void {
    this.toPreviousPageEmitter.emit();
  }

  handleToNextPage(): void {
    this.toNextPageEmitter.emit();
  }

  handleSelectHangar(hangarMinified: HangarMinified): void {
    this.hangarSelectedEmitter.emit(hangarMinified);
  }

  handleFloatButtonClick(): void {

    if (this.hangarSelected) {
      this.showLateralNavbar = true;
    } else {
      this.router.navigate(['hangars/insert']);
    }

  }

  handleCloseLateralNavbar(): void {
    this.showLateralNavbar = false;
  }

  handleDeleteHangar(): void {
    this.deleteHangarEmitter.emit();
  }

}
