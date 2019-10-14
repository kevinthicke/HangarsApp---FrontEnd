import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductMinified } from '../../../../core/models/product/product-minified';
import { HangarMinified } from '../../../../core/models/hangar/hangar-minified.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  @Input() products: ProductMinified[];
  @Input() hangarsMinified: HangarMinified[];

  @Output() hangarSelectedEmitter = new EventEmitter<HangarMinified>();
  @Output() addToShoppingCartEmitter = new EventEmitter<ProductMinified>();

  existsSelectedHangar: boolean = false;

  ngOnInit(): void { }

  handleAddToShoppingCartEmitter(productMinified: ProductMinified): void {
    this.addToShoppingCartEmitter.emit(productMinified);
  }

  handleHangarSelected(hangarMinified: HangarMinified): void {

    this.existsSelectedHangar = hangarMinified !== null;

    if (this.existsSelectedHangar) {
      this.hangarSelectedEmitter.emit(hangarMinified);
    }

  }

}
