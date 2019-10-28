import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fade } from 'src/app/shared/animations/fade.animation';
import { ShoppingCart } from '../../../core/models/commerce/shopping-cart.model';
import { fullFade } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  animations: [ fade, fullFade ]
})
export class NavbarComponent implements OnInit {

  buttons = [
    {
      title: 'navbar.home',
      link: '/',
    },
    {
      title: 'navbar.hangars',
      link: '/hangars'
    },
    {
      title: 'navbar.products',
      link: '/products'
    },
    {
      title: 'navbar.shop',
      link: '/commerce'
    },
  ];

  @Input() shoppingCart: ShoppingCart;
  @Input() activeLang: string;
  @Input() userName: string;

  @Output() changeLanguageEmitter   = new EventEmitter<void>();
  @Output() logOutEmitter           = new EventEmitter<void>();
  @Output() searchValueEmitter      = new EventEmitter<string>();

  isSearchBarDisplayed: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  changeLanguage(): void {
    this.changeLanguageEmitter.emit();
  }

  logOut(): void {
    this.logOutEmitter.emit();
  }

  handleSearchButtonClick(): void {
    this.isSearchBarDisplayed = !this.isSearchBarDisplayed;
  }

  handleSearchValue(searchValue: string): void {
    this.searchValueEmitter.emit(searchValue);
  }

}
