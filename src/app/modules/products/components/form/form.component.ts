import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, ProductExtended } from '../../../../core/models/product.model';
import { FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { HangarService } from '../../../../core/services/hangar.service';
import { Page } from '../../../../core/models/page.model';
import { Hangar } from '../../../../core/models/hangar.model';
import { Price } from '../../../../core/models/price.model';

export interface ProductForm extends ProductExtended {
  hangarId: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  @Input()
  product: ProductExtended;

  @Input()
  hangarName: string;

  hangars: Hangar[];
  hangarSelectedId = -1;
//  item = -1;
  form: FormGroup;

  @Output()
  productFormEvent = new EventEmitter<ProductForm>();

  constructor(private hangarService: HangarService) { }

  ngOnInit() {

    this.initForm();
    this.loadHangarThatContainsProduct();
    this.loadHangars();
    this.loadProduct();

    console.log(this.form.value);
    // TODO: No recoge hangarId

  }

  private initForm() {
    this.form = new FormGroup({
      name: new FormControl(
        '',
        [Validators.required, Validators.minLength(3)]),
      description: new FormControl(
        '',
        Validators.required),
      price: new FormControl(
        0,
        Validators.required),
      hangarId: new FormControl(null),
      quantity: new FormControl(0)
    });
  }

  private loadHangars() {
    this.hangarService
      .getHangars()
      .subscribe((response: Page<Hangar>): void => {
        this.hangars = response.content;
      });
  }

  private loadHangarThatContainsProduct() {

    if (this.hangarName) {

      this.hangarService
        .getHangarByName(this.hangarName)
        .subscribe((hangars: Hangar[]) => {
          const [ hangar ] = hangars;
          this.form.controls['hangarId'].setValue(hangar.id);
        });

    }
  }

  private loadProduct() {
    if (this.product) {
      this.name.setValue(this.product.name);
      this.description.setValue(this.product.description);

      if (this.product.prices) {
        this.price.setValue(this.product.prices[this.product.prices.length]);
      }
    }
  }

  getInput() {
    const { name, description, price, quantity, hangarId } = this.form.value;

    const prices: Price[] = [{ price }];

    this.productFormEvent.emit({ hangarId, name, description, prices, quantity });
  }

  selectHangar(hangarId: number, i: number) {
    this.hangarSelectedId = i;
    this.form.controls.hangarId.setValue(hangarId);
  }

  trackByFn(index: number, hangar: Hangar): number {
    console.log(index, hangar);
    return hangar.id;
  }


  get name() {
    return this.form.get('name');
  }

  get description() {
    return this.form.get('description');
  }

  get price() {
    return this.form.get('price');
  }

  decreaseQuantity() {
    let oldQuantity =  this.form.get('quantity').value;

    if (oldQuantity > 0) {
      this.form.controls['quantity'].setValue(-- oldQuantity);
    }
  }

  increaseQuantity() {
    let oldQuantity =  this.form.get('quantity').value;
    this.form.controls['quantity'].setValue(++ oldQuantity);
  }

}
