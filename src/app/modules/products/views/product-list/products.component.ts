import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductExtended, RawProduct } from '../../../../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  @Input() products: ProductExtended[] | RawProduct[];
  @Input() hangarsName: string[];

  @Output() hangarSelectedNameEmitter      = new EventEmitter<string>();
  @Output() incrementProductCounterEmitter = new EventEmitter<void>();
  @Output() decrementProductCounterEmitter = new EventEmitter<void>();

  ngOnInit(): void { }

  handleIncrementProductCounterEmitter(): void {
    this.incrementProductCounterEmitter.emit();
  }

  handleDecrementProductCounterEmitter(): void {
    this.decrementProductCounterEmitter.emit();
  }

  handleHangarSelected(hangarName: string): void {

    if (hangarName) {
      this.hangarSelectedNameEmitter.emit(hangarName);
    }

  }

}
