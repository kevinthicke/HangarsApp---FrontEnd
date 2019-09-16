import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { RawProduct } from '../../../../core/models/product.model';
import { Price } from '../../../../core/models/price.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  state$: Observable<RawProduct>;
  product: RawProduct;
  price;

  showPrices = false;

  constructor(private route: ActivatedRoute,
              private service: ProductService,
              private router: Router) { }

  ngOnInit() {
    this.state$ = this.route
                      .paramMap
                      .pipe(() => window.history.state);
    this.product = this.state$ as unknown as RawProduct;

  }

  onClick() {
    this.showPrices = !this.showPrices;
  }

  onSubmit(form: NgForm) {
    const price: Price = {
      price: form.value.price
    };

    this.service
        .insertPrice(this.product.id, price)
        .subscribe(resp => {
          this.router.navigate(['/products/details'], { state: resp });
        });

  }
}
