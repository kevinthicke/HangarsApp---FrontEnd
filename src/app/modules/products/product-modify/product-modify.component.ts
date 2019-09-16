import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models/product.model';
import { HangarService } from '../../../core/services/hangar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductForm } from '../components/form/form.component';

@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.less']
})
export class ProductModifyComponent implements OnInit {
  state$: Observable<Product>;
  product: Product;
  hangarName: string;

  constructor(
    private hangarService: HangarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { hangarName, product } = (this.route.paramMap.pipe(
      () => window.history.state
    ) as unknown) as any;

    this.hangarName = hangarName;
    this.product = product;

  }

  hangarproductFormEvent({ hangarId, ...product }: ProductForm) {
    this.hangarService
      .saveProductInHangarByhangarId(hangarId, product)
      .subscribe(
        (): void => {
          this.router.navigate(['products']);
        }
      );
  }
}
