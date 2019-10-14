import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { HangarMinified } from '../../../../core/models/hangar/hangar-minified.model';
import { Product } from '../../../../core/models/product/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() product: Product[];
  @Input() hangarsMinified: HangarMinified[];
  @Input() isFormEnabled: boolean;

  @Output() productFormEmitter = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void { }

  handleProductFormEmitter(productForm: Product): void {
    this.productFormEmitter.emit(productForm);
  }

}
