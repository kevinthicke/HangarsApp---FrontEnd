import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductExtended } from '../../../../core/models/product.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';
import { DecrementAction, IncrementAction } from '../../../../../store/actions/shopping-cart.action';
import { AppState } from '../../../../../store/state/index';


@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.less']
})
export class CardDeckComponent implements OnInit {

  @Input() products: ProductExtended[];
  @Input() hangarName: string;

  constructor(private router: Router,
              private store: Store<AppState>) { }

  ngOnInit() {
  }

  goModify(product: Product): void {
    this.router.navigate(['products/modify'], { state: { product, hangarName: this.hangarName }});
  }

  goDetails(product: Product): void {
    this.router.navigate(['products/details'], { state: product });
  }

  incrementProductCounter(): void {
    this.store.dispatch(new IncrementAction());
  }

  decrementProductCounter(): void {
    this.store.dispatch(new DecrementAction());
  }

}
