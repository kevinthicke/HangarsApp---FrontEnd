import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { HangarMinified } from '../../../../../core/models/hangar/hangar-minified.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
import { InputFormComponent } from '../input-form/input-form.component';

@Component({
  selector: 'app-hangar-list-form',
  templateUrl: './hangar-list-form.component.html',
  styleUrls: ['./hangar-list-form.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HangarListFormComponent),
      multi: true
    },
     {
      provide: NG_VALIDATORS,
      useExisting: HangarListFormComponent,
      multi: true
    } 
  ]
})
export class HangarListFormComponent implements OnInit, ControlValueAccessor {

  @Input() hangarsMinified: HangarMinified[];
  @Input() label: string

  value: number;  
  onChange: (hangarId: number) => void;
  onTouched: () => void;
  disabled: boolean;

  hangarSelectedId: number = null;
  formControl: FormControl;

  ngOnInit(): void { }

  writeValue(hangarSelectedId: number): void {
    this.value = hangarSelectedId ? hangarSelectedId: -1;
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

  selectHangar(hangarId: number): void {
    
    const existsHangarSelected: boolean = this.hangarSelectedId === hangarId;
    this.hangarSelectedId = existsHangarSelected ? null : hangarId;

    this.onChange(this.hangarSelectedId);

  }

  validate(formControl: FormControl): void {
    this.formControl = formControl;
    console.log(formControl)
  }

}
