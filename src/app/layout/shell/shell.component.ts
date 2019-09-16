import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.less']
})
export class ShellComponent implements OnInit {
  activeLang = 'es';
  renderShoppingCart = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
    this.translate.use(this.activeLang);
   }

  ngOnInit(): void { }

  handleChangeLanguage() {
    this.activeLang = (this.activeLang === 'es') ? 'en' : 'es';
    this.translate.use(this.activeLang);
  }

  handleRenderShoppingCart(): void {
    this.renderShoppingCart = !this.renderShoppingCart;
  }

}
