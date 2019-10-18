import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { CustomValidator } from 'src/app/shared/validators/custom.validator';
import { HangarMinified } from '../../../../core/models/hangar/hangar-minified.model';
import { Product } from '../../../../core/models/product/product.model';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.less']
})
export class ProductCrudComponent implements OnInit, OnChanges {

  @Input() product: Product;
  @Input() hangarsMinified: HangarMinified[];
  @Input() isFormEnabled: boolean;

  @Output() productFormEmitter = new EventEmitter<Product>();

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
      console.log(this.product);
    }

  }

  buildForm(): void {

    this.form = this.formBuilder.group({
      id: [-1], 
      name: [
        '',
        [ Validators.required, Validators.minLength(2) ]
      ],
      description: [
        '',
        Validators.required
      ],
      hangarId: [
        -1,
        Validators.required
      ],
      quantity: [
        1,
        [ Validators.required, CustomValidator.shouldBeANumber, CustomValidator.shouldBeGreaterThanZero ]
      ],
      price: [
        0.99,
        [ Validators.required, CustomValidator.shouldBeANumber, CustomValidator.shouldBeGreaterThanZero ]
      ]
    });

  }

  submit(): void {

     this.productFormEmitter.emit({
      ... this.form.value,
      price: Number(this.form.value['price'])
    } as Product);

  }

}
