import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Price } from '../../../../core/models/price.model';
import { ProductForm } from '../../../../core/models/product-form.model';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.less']
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;
  @Output() formEmitter = new EventEmitter<ProductForm>();

  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl(''),
      description: new FormControl('Default description'),
      price: new FormControl(0),
      quantity: new FormControl(0)
    });

  }

  submit(): void {

    const {
      name,
      description,
      price,
      quantity } = this.form.value;

    const prices: Price[] = [{ price }];

    this.formEmitter.emit({ name, description, prices, quantity });
  }

}
