import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SecurityFacade } from '../../../../store/facades/security.facade';
import { CommerceFacade } from '../../../../store/facades/commerce.facade';
import { ShoppingCart } from 'src/app/core/models/commerce/shopping-cart.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar-container',
  templateUrl: './navbar.container.html',
  styleUrls: ['./navbar.container.less']
})
export class NavbarContainer implements OnInit {

  @Input() activeLang: string;

  @Output() changeLanguageEmitter = new EventEmitter<void>();
  @Output() shoppingCartRenderEmitter = new EventEmitter<void>();

  shoppingCart$: Observable<ShoppingCart>;

  constructor(
    private securityFacade: SecurityFacade,
    private commerceFacade: CommerceFacade
  ) { }

  ngOnInit(): void { }

  handleChangeLanguage(): void {
    this.changeLanguageEmitter.emit();
  }

  handleLogOut(): void {
    this.securityFacade.logOut();
  }

  loadShoppingCart(): void {
    this.shoppingCart$ = this.commerceFacade.shoppingCart$
  }

}
 