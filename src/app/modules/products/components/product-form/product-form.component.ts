import { Component, DoCheck, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HangarMinified } from '../../../../core/models/hangar/hangar-minified.model';
import { Product } from '../../../../core/models/product/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.less']
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product;
  @Input() hangarsMinified: HangarMinified[];
  @Input() isFormEnabled: boolean;

  @Output() productFormEmitter = new EventEmitter<Product>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit(): void {

    this.buildForm();

    if (!this.isFormEnabled) {
      this.form.disable();
    }

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setFormValues(this.product);
  }

  private buildForm(): void {

    this.form = this.formBuilder.group({
      id: null,
      name: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],
      description: [
        '',
        Validators.required
      ],
      price: [
        0,
        Validators.required
      ],
      hangarId: null,
      quantity: [
        0,
        Validators.required
      ]
    });
  }

  setFormValues(product: Product): void {

    let { controls } = this.form;

    Object.keys(controls).forEach((key: string) => {
      controls[key].setValue(product[key]);
    });
  }

  handleQuantityChangeEmitter(quantity: number): void {
    this.form.controls['quantity'].setValue(quantity);
  }

  handleSelectedHangarEmitter(hangarId: number) {
    this.form.controls['hangarId'].setValue(hangarId);
  }

  submit(): void {
    console.log(this.form.value);
    this.productFormEmitter.emit(this.form.value);
  }

}
