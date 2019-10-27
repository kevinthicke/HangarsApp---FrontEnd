import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fade } from 'src/app/shared/animations/fade.animation';
import { ShoppingCart } from '../../../core/models/commerce/shopping-cart.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  animations: [ fade ]
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

  @Output() loadShoppingCartEmitter = new EventEmitter<void>();
  @Output() changeLanguageEmitter   = new EventEmitter<void>();
  @Output() logOutEmitter           = new EventEmitter<void>();

  isShoppingInfoRendered: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  changeLanguage(): void {
    this.changeLanguageEmitter.emit();
  }

  logOut(): void {
    this.logOutEmitter.emit();
  }

  handleMouseOver(): void {
    this.loadShoppingCartEmitter.emit();
    this.isShoppingInfoRendered = true;
  }

  handleMouseLeave(): void {
    this.isShoppingInfoRendered = false;
  }

}
