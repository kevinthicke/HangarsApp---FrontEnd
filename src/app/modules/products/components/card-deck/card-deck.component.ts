import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductMinified } from '../../../../core/models/product/product-minified';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.less']
})
export class CardDeckComponent implements OnInit {

  @Input() products: ProductMinified[];

  @Output() addToShoppingCartEmitter = new EventEmitter<ProductMinified>();

  constructor() { }

  ngOnInit(): void { }

  addToShoppingCart(productMinified: ProductMinified): void {
    this.addToShoppingCartEmitter.emit(productMinified);
  }

}
