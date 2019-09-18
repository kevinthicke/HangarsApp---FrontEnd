import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product, ProductExtended, RawProduct } from '../../../../core/models/product.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';
import { DecrementProductCounterAction, IncrementProductCounterAction } from '../../../../../store/actions/shopping-cart.action';
import { AppState } from '../../../../../store/state/index';


@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.less']
})
export class CardDeckComponent implements OnInit {

  @Input() products: RawProduct[];
  @Input() hangarName: string;

  @Output() incrementProductCounterEmitter = new EventEmitter<void>();
  @Output() decrementProductCounterEmitter = new EventEmitter<void>();

  constructor(private router: Router,
              private store: Store<AppState>) { }

  ngOnInit(): void { }

  goModify(product: Product): void {
    this.router.navigate(
      ['products/modify'],
      { state:
        { product,
          hangarName: this.hangarName
        }
      });
  }

  goDetails(product: Product): void {
    this.router.navigate(['products/details'], { state: product });
  }

  incrementProductCounter(): void {
    this.incrementProductCounterEmitter.emit();
  }

  decrementProductCounter(): void {
    this.decrementProductCounterEmitter.emit();
  }

}
