import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { fade } from 'src/app/shared/animations/fade.animation';
import { Hangar } from '../../../../core/models/hangar.model';
import { ProductsHangar } from '../../../../core/models/products-hangar.model';
import { HangarService } from '../../../../core/services/hangar.service';
import { ProductService } from '../../../../core/services/product.service';


@Component({
  selector: 'app-hangar-details',
  templateUrl: './hangar-details.component.html',
  styleUrls: ['./hangar-details.component.less'],
  animations: [
    fade
  ]
})
export class HangarDetailsComponent implements OnInit {

  state$: Observable<Hangar>;
  products;
  id;
  showProductForm = false;
  submitFormError = false;
  submitFormComplete = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private hangarService: HangarService,
  ) { }

  ngOnInit(): void {
    this.state$ = this.route.paramMap.pipe(() => window.history.state);
    this.id = this.route.paramMap.pipe(() => window.history.state.id);
  }

  handleInsertProduct(): void {
    this.showProductForm = !this.showProductForm;
  }

  /*
  async handleProductForm({ quantity, ... product }: ProductForm): Promise<any> {

    const {
      id: productId
    } = await this.productService.insertProduct(product).toPromise();

    await this.HangarService
      .saveProductInHangarByHangarIdAndProductId(this.id, productId)
      .toPromise().then(() => {});

    await this.productService
      .setProductQuantity(this.id, productId, quantity)
      .subscribe(() => {
        this.showProductForm = false;
      });
  }
  */

 handleProductForm({ quantity, ... product }: any): void {
/*
  this.productService
    .insertProduct(product)
    .pipe(
      switchMap((product: any) => {
        return this.hangarService.saveProductInHangar(this.id, product.id);
      }),
      switchMap((productsHangar: ProductsHangar) => {
        return this.productService.setProductQuantity(productsHangar.hangar_id, productsHangar.product_id, productsHangar.quantity);
      })
    )
    .subscribe({
      next: () => {
        this.showProductForm = false;
      },
      error: () => {
        this.submitFormError = true;

        timer(3000).subscribe(() => {
          this.submitFormError = false;
        });
      },
      complete: () => {
        this.submitFormComplete = true;

        timer(3000).subscribe(() => {
          this.submitFormComplete = false;
        });
      }
    });
 */
  }

}

