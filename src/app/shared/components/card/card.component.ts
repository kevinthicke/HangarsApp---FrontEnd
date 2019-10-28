import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductMinified } from '../../../core/models/product/product-minified';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() product          : ProductMinified;
  @Input() badgePillText    : string;
  @Input() leftButtonClass  : string;
  @Input() rightButtonClass : string;

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
