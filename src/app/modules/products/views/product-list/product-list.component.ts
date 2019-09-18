import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HangarService } from 'src/app/core/services/hangar.service';
import { HangarFacade } from '../../../../../store/facades/hangar.facade';
import { ProductExtended, RawProduct } from '../../../../core/models/product.model';
import { ProductService } from '../../../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  @Input() products: ProductExtended[] | RawProduct[];
  @Input() hangarsName: string[];

  size = 18;
  hangarSelectedName: string;

  constructor(
    private productService: ProductService,
    private hangarFacade: HangarFacade,
    private hangarService: HangarService,
    private router: Router
  ) { }

  ngOnInit(): void { }

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
