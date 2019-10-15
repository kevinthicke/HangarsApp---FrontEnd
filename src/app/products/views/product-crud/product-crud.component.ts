import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../../core/models/product/product.model';
import { FormBuilder, Validators, FormGroup, NgModel } from '@angular/forms';
import { HangarMinified } from '../../../core/models/hangar/hangar-minified.model';
import { RegisterValidators } from '../../../security/validators/register.validators';

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
      name: ['', [Validators.required, Validators.minLength(2), RegisterValidators.cannotContainsEmptySpace]],
      description: ['', Validators.required ],
      hangarId: [ -1, Validators.required ]
    });

  }
/*
  handleHangarSelected(hangar: HangarMinified): void {

    if (this.form.enabled) {
      this.form.controls['hangarId'].setValue(hangar.id);
    }

  }

  handleNameForm(input: NgModel) {

    const { name: formControlName, value } = input;

    this.form.controls[formControlName].setValue(value);
    console.log(this.form.controls['name']);
  }
 */
  submit(): void {
    console.log(this.form.value);
  }

}
