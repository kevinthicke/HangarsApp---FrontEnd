import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lateral-navbar',
  templateUrl: './lateral-navbar.component.html',
  styleUrls: ['./lateral-navbar.component.less'],
})
export class LateralNavbarComponent implements OnInit {

  @Output() deleteHangarEmitter = new EventEmitter<void>();
  @Output() closeEmitter        = new EventEmitter<void>();

  ngOnInit(): void { }

  emitDelete(): void {
    this.deleteHangarEmitter.emit();
  }

  close(): void {
    this.closeEmitter.emit();
  }

}
