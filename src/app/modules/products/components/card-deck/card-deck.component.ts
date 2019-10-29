import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductMinified } from '../../../../core/models/product/product-minified';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.less']
})
export class CardDeckComponent implements OnInit {

  @Input() products         : ProductMinified[];
  @Input() leftButtonText   : string;
  @Input() rightButtonText  : string;
  @Input() leftButtonClass  : string;
  @Input() rightButtonClass : string;

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
