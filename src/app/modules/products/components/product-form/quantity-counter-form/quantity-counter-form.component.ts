import { Component, OnInit, EventEmitter, Output, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
import { HangarListFormComponent } from '../hangar-list-form/hangar-list-form.component';

@Component({
  selector: 'app-quantity-counter-form',
  templateUrl: './quantity-counter-form.component.html',
  styleUrls: ['./quantity-counter-form.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuantityCounterFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: QuantityCounterFormComponent,
      multi: true
    }
  ]
})
export class QuantityCounterFormComponent implements OnInit, ControlValueAccessor {

  @Input() label: string;

  value: number;
  onChange: (quantity: number) => void;
  onTouched: () => void;
  disabled: boolean;
  isInvalid: boolean = false;

  ngOnInit(): void { }

  writeValue(quantity: number): void {
    this.value = quantity ? quantity: null;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  increaseQuantity(): void {
    this.onChange(++this.value)
  }

  decreaseQuantity() {
    this.onChange(--this.value);
  }

  validate(formControl: FormControl): void {
    this.isInvalid = formControl.errors !== null;
  }


}
