import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductMinified } from '../../../core/models/product/product-minified';
import { Product } from '../../../core/models/product/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() product: ProductMinified;

  @Output() leftButtonClickEmitter  = new EventEmitter<ProductMinified>();
  @Output() rightButtonClickEmitter = new EventEmitter<ProductMinified>();

  constructor() { }

  ngOnInit(): void { }

  handleLeftButtonClick(product: ProductMinified): void {
    this.leftButtonClickEmitter.emit(product);
  }

  handleRightButtonClick(product: ProductMinified): void {
    this.rightButtonClickEmitter.emit(product);
  }

}
