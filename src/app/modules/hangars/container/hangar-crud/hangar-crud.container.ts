import { Component, OnInit } from '@angular/core';
import { HangarFacade } from '../../../../../store/facades/hangar.facade';
import { Hangar } from '../../../../core/models/hangar/hangar.model';
import { Observable } from 'rxjs';
import { RouterFacade } from '../../../../../store/facades/router.facade';
import { RouterStateUrl } from '../../../../../store/state/router.state';
import { LocalPathTypes } from '../../../products/views/utils/local-path.type';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hangar-crud-container',
  templateUrl: './hangar-crud.container.html',
  styleUrls: ['./hangar-crud.container.less']
})
export class HangarCrudContainer implements OnInit {

  hangar$: Observable<Hangar>;
  isFormEnabled$: Observable<boolean>;

  constructor(
    private hangarFacade: HangarFacade,
    private routerFacade: RouterFacade
  ) { }

  ngOnInit(): void {
    this.hangarFacade.loadHangarDetails();
    this.hangar$ = this.hangarFacade.hangarSelected$;

    this.isFormEnabled$ = this.routerFacade.router$
        .pipe(
          map((state: RouterStateUrl) => state.url),
          map(url => !url.includes(LocalPathTypes.DETAILS))
        );
  }

  handleHangarFormEmitter(hangar: Hangar): void {
    this.hangarFacade.manageInsertHangar(hangar);
  }
}
