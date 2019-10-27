import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductMinified } from '../../../../core/models/product/product-minified';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.less']
})
export class CardDeckComponent implements OnInit {

  @Input() products: ProductMinified[];

  @Output() addToShoppingCartEmitter = new EventEmitter<ProductMinified>();

  constructor(public router: Router) { }

  ngOnInit(): void { }

  addToShoppingCart(productMinified: ProductMinified): void {
    this.addToShoppingCartEmitter.emit(productMinified);
  }

  navigateToInsert(product: ProductMinified): void {
    this.router.navigate(['products', 'modify', product.id]);
  }
}
