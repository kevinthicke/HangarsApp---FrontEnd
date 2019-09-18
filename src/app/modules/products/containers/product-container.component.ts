import { Component, OnInit } from '@angular/core';
import { ProductFacade } from '../../../../store/facades/product.facade';
import { Observable } from 'rxjs';
import { ProductExtended, RawProduct } from '../../../core/models/product.model';
import { HangarFacade } from '../../../../store/facades/hangar.facade';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.less']
})
export class ProductContainerComponent implements OnInit {

  products$: Observable<ProductExtended[] | RawProduct[]>;
  hangarsName$: Observable<string[]>

  constructor(
    private productFacade: ProductFacade,
    private hangarFacade: HangarFacade
  ) {

    this.products$ = this.productFacade.products$;

    this.hangarFacade.loadHangarsName();
    this.hangarsName$ = this.hangarFacade.hangarsName$;
    this.hangarsName$.subscribe(something => console.log(something));
  }

  ngOnInit(): void { }

}
