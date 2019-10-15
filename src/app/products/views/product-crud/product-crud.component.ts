import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../../core/models/product/product.model';
import { FormBuilder, Validators, FormGroup, NgModel } from '@angular/forms';
import { HangarMinified } from '../../../core/models/hangar/hangar-minified.model';
import { CustomValidator } from 'src/app/shared/validators/custom.validator';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.less']
})
export class ProductCrudComponent implements OnInit, OnChanges {

  @Input() product: Product;
  @Input() hangarsMinified: HangarMinified[];
  @Input() isFormEnabled: boolean;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {

    if (!this.isFormEnabled) {
      this.form.disable();
    }

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['product'] && changes['product'].currentValue) {
      this.form.patchValue(this.product);
    }

  }

  buildForm(): void {

    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2) ]],
      description: ['', Validators.required ],
      hangarId: [ -1, Validators.required ],
      quantity: [  1, [ Validators.required, CustomValidator.shouldBeGreaterThanZero ] ]
    });

  }

  submit(): void {
    console.log(this.form.value);
  }

}
