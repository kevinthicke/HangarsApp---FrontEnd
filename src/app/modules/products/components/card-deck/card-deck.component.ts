import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductMinified } from '../../../../core/models/product/product-minified';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.less']
})
export class CardDeckComponent implements OnInit {

  @Input() products        : ProductMinified[];
  @Input() leftButtonText  : string;
  @Input() rightButtonText : string;
  @Input() buttonClass     : string;

  @Output() cardLeftButtonClickEmitter  = new EventEmitter<ProductMinified>();
  @Output() cardRightButtonClickEmitter = new EventEmitter<ProductMinified>();

  constructor(public router: Router) { }

  ngOnInit(): void { }

  handleCardLeftButtonClick(product: ProductMinified): void {
    this.cardLeftButtonClickEmitter.emit(product);
  }

  handleCardRightButtonClick(product: ProductMinified): void {
    this.cardRightButtonClickEmitter.emit(product);
  }
}
