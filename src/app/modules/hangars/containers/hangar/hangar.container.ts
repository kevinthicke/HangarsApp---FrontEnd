import { Component, OnInit } from '@angular/core';
import { HangarFacade } from '../../../../../store/facades/hangar.facade';
import { HangarMinified } from '../../../../core/models/hangar/hangar-minified.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.container.html',
  styleUrls: ['./hangar.container.less']
})
export class HangarContainer implements OnInit {

  hangarsMinified$: Observable<HangarMinified[]>;
  hangarSelected$: Observable<HangarMinified>;
  page: number = 0;

  constructor(private hangarFacade: HangarFacade) { }

  ngOnInit(): void {

    this.hangarFacade.loadHangars(0);
    this.hangarsMinified$ = this.hangarFacade.hangarsMinified$;

    this.hangarSelected$ = this.hangarFacade.hangarSelected$;
  }

  handleToPreviousPage(): void {
    this.hangarFacade.loadHangars(-- this.page);
  }

  handleToNextPage(): void {
    this.hangarFacade.loadHangars(++ this.page);
  }

  changeHangarSelected(hangarMinified: HangarMinified): void {
    this.hangarFacade.changeHangarSelected(hangarMinified);
  }

  handleDeleteHangar(): void {
    this.hangarFacade.deleteHangar();
  }

}
