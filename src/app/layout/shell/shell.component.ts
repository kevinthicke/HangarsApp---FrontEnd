import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Error } from 'src/app/core/models/auxiliary/error.model';
import { ErrorFacade } from '../../../store/facades/error.facade';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.less']
})
export class ShellComponent implements OnInit {

  activeLang = 'es';
  renderShoppingCart = false;

  error$: Observable<Error>;

  constructor(
    private translate: TranslateService,
    private errorFacade: ErrorFacade
  ) {

    this.translate.setDefaultLang(this.activeLang);
    this.translate.use(this.activeLang);

  }

  ngOnInit(): void {
    this.error$ = this.errorFacade.error$;
  }

  handleChangeLanguage() {
    this.activeLang = (this.activeLang === 'es') ? 'en' : 'es';
    this.translate.use(this.activeLang);
  }

  handleRenderShoppingCart(): void {
    this.renderShoppingCart = !this.renderShoppingCart;
  }

}
