import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterFacade } from 'src/store/facades/router.facade';
import { RouterStateUrl } from 'src/store/state/router.state';
import { HangarFacade } from '../../../../../store/facades/hangar.facade';
import { ProductFacade } from '../../../../../store/facades/product.facade';
import { HangarMinified } from '../../../../core/models/hangar/hangar-minified.model';
import { Product } from '../../../../core/models/product/product.model';
import { LocalPathTypes } from '../../views/utils/local-path.type';

@Component({
  selector: 'app-product-crud-container',
  templateUrl: './product-crud.container.html',
  styleUrls: ['./product-crud.container.less']
})
export class ProductCrudContainer implements OnInit {

  product$: Observable<Product>;
  hangarsMinified$: Observable<HangarMinified[]>
  isFormEnabled$: Observable<boolean>;

  constructor(
    private productFacade: ProductFacade,
    private hangarFacade: HangarFacade,
    private routerFacade: RouterFacade
  ) { }

  ngOnInit(): void {

    this.product$ = this.productFacade.product$;
    this.hangarsMinified$ = this.hangarFacade.hangarsMinified$;

    this.isFormEnabled$ = this.routerFacade.router$
        .pipe(
          map((state: RouterStateUrl) => state.url),
          map(url => !url.includes(LocalPathTypes.DETAILS))
        );

  }

  handleProductFormEmitter(productForm: Product): void {
    this.productFacade.manageInsertProduct(productForm);
  }

}
