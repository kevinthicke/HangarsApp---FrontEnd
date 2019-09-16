import { Component, OnInit, Output, EventEmitter, Input, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../security/services/authentication.service';
import { LoadingSpinnerService } from '../../../core/services/loading-spinner.service';
import { fade } from 'src/app/shared/animations/fade.animation';
import { Subject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ShoppingCartState } from '../../../modules/products/components/card-deck/card-deck.component';
import { AppState } from '../../../../store/shopping-cart.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  animations: [ fade ]
})
export class NavbarComponent implements OnInit, AfterContentInit {
  title = 'Hangars App';
  buttonSelectedIndex = -1;
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
      link: '/about'
    },
  ];
  isLoading: Subject<boolean>;

  @Input() activeLang: string;
  @Output() changeLanguageEmitter = new EventEmitter<void>();
  @Output() shoppingCartRenderEmitter = new EventEmitter<void>();
  productCounter$: Observable<number>;

  constructor(public authenticationService: AuthenticationService,
              private loadingSpinnerService: LoadingSpinnerService,
              private store: Store<AppState>,
              private router: Router) {

    this.productCounter$ = this.store
                              .select('shoppingCart')
                              .pipe(map(state => state.productCounter));
  }

  ngOnInit(): void { }

  ngAfterContentInit(): void {
    this.isLoading = this.loadingSpinnerService.isLoading;
  }

  /*
  ngDoCheck(): void {
    this.username = this.authenticationService.getUsername();
  }
  */

  renderShoppingCart(): void {
    this.shoppingCartRenderEmitter.emit();
  }

  handleClickButton(index: number): void {
    this.buttonSelectedIndex = index;
  }

  emitChangeLanguage(): void {
    this.changeLanguageEmitter.emit();
  }

  logOut(): void {
    this.router.navigate(['logout']);
  }

}
