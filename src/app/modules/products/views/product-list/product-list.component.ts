import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductExtended, RawProduct } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  @Input() products: ProductExtended[] | RawProduct[];
  @Input() hangarsName: string[];

  @Output() hangarSelectedNameEmitter      = new EventEmitter<string>();
  @Output() incrementProductCounterEmitter = new EventEmitter<void>();
  @Output() decrementProductCounterEmitter = new EventEmitter<void>();

  size = 18;

  constructor(private router: Router) { }

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

  /*
  private loadProducts(size: number): void {

    this.products$ = this.productService
                      .getProducts(0, this.size)
                      .pipe(map(resp => resp.content));
  }

  private loadProductsByHangarName(hangarName: string): void {

    this.products$ = this.hangarService
                        .getProductsByHangarName(hangarName)
                        .pipe(map(resp => resp));
  }
  */

  /*
  handleHangar(hangarName: string): void {

    if (hangarName) {
      this.hangarSelectedName = hangarName;
      this.loadProductsByHangarName(this.hangarSelectedName);
    } else {
      this.loadProducts(this.size);
    }
  }
  */

 

  goInsert(): void {
    this.router.navigate(['products/insert']);
  }

/*
  loadMore(): void {
    this.size += 18;
    this.loadProducts(this.size);
    ;
  }
 */
}
