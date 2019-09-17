import { Component, OnInit, Input } from '@angular/core';
import { Hangar } from '../../../../core/models/hangar.model';
import { HangarService } from '../../../../core/services/hangar.service';
import { Router } from '@angular/router';
import { AppState } from 'src/store/state';
import { Store, select } from '@ngrx/store';
import { GetHangarsAction } from 'src/store/actions/hangar.action';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HangarFacade } from '../../../../../store/facades/hangar.facade';

@Component({
  selector: 'app-hangar-list',
  templateUrl: './hangar-list.component.html',
  styleUrls: ['./hangar-list.component.less']
})
export class HangarListComponent implements OnInit {
  hangars$: Observable<Hangar[]>;
  hangar: Hangar;
  page = 0;
  size = 18;
  totalElements: number;

  click = false;
  item = -1;
  showMenu = false;

  constructor(
    private service: HangarService,
    private router: Router,
    private hangarFacade: HangarFacade) {

      this.hangars$ = this.hangarFacade.hangars$;

    }

  ngOnInit() {
    //this.loadFirstPage();
  }

  expandMenu() {
    if (this.item == -1) {
      this.router.navigate(['hangars', 'insert']);
    } else {
      this.showMenu = true;
    }
  }

  handleHangar({ hangar, item }) {
    this.hangar = hangar;
    this.item = item;
  }


  handleCloseNavBar(): void {
    this.showMenu = false;
  }

/*
  handleHangarDeleteEvent(hangar: Hangar): void {

    this.service
        .deleteHangarById(hangar.id)
        .subscribe({
          next: (resp: Hangar) => {
          this.loadFirstPage();
          }
        });
  }

  private loadFirstPage(): void {

    this.service
        .getHangars(0, this.size)
        .subscribe((response: any) => {
          this.hangars = response.content;
          this.totalElements = response.totalElements;
        });
  }

  loadNextPage(): void  {
    const r = this.totalElements % this.size;

    if (this.page + 1 < r) {

      this.service
          .getHangars(++this.page, this.size)
          .subscribe((response: any) => {
            this.hangars = response.content;
          });
    }
  }

  loadPreviousPage(): void {

    if (this.page > 0) {

      this.service
          .getHangars(--this.page, this.size)
          .subscribe((response: any) => {
            this.hangars = response.content;
          });
    }
  }
  */
}
