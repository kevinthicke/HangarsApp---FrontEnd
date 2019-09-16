import { Component, OnInit } from '@angular/core';
import { HangarService } from '../../../../core/services/hangar.service';
import { ProductForm } from '../../components/form/form.component';
import { Router } from '@angular/router';
import { LoadingSpinnerService } from '../../../../core/services/loading-spinner.service';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.less']
})
export class ProductInsertComponent implements OnInit {

  constructor(private hangarService: HangarService,
              private loadingSpinnerLoading: LoadingSpinnerService,
              private router: Router) { }

  ngOnInit(): void { }

  hangarproductFormEvent({ hangarId, ... product }: ProductForm) {
    this.hangarService
      .saveProductInHangarByhangarId(hangarId, product)
      .subscribe({
        complete: (): void => {
          this.router.navigate(['products']);
        }
      });
  }
}
