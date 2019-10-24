import { Component, forwardRef, Input, OnInit, OnChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fade } from '../../../animations/fade.animation';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: InputComponent,
      multi: true
    }
  ],
  animations: [ fade ]
})
export class InputComponent implements ControlValueAccessor, OnInit {

  @Input() label: string;
  @Input() isTextArea?: boolean = false;
  @Input() type?: string = 'text';

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
