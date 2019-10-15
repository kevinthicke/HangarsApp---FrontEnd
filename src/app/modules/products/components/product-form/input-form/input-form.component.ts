import { Component, OnInit, EventEmitter, Output, Input, forwardRef } from '@angular/core';
import { NgModel, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: InputFormComponent,
      multi: true
    }
  ]
})
export class InputFormComponent implements OnInit, ControlValueAccessor {

  @Input() label: string;
  @Input() isTextArea: boolean = false;

  value: string;
  onChange: () => void;
  onTouched: () => void;
  disabled: boolean;
  formControl: FormControl = new FormControl();

  ngOnInit(): void { }

  writeValue(value: string): void {
    this.value = value ? value : '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(formControl: FormControl): void {
    this.formControl = formControl;
  }

}
