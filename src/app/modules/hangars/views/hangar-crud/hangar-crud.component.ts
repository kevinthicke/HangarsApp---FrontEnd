import { Component, OnInit, SimpleChanges, Input, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Hangar } from '../../../../core/models/hangar/hangar.model';
import { pulse } from 'src/app/shared/animations/pulse.animation';

@Component({
  selector: 'app-hangar-crud',
  templateUrl: './hangar-crud.component.html',
  styleUrls: ['./hangar-crud.component.less']
})
export class HangarCrudComponent implements OnInit {

  @Input() hangar: Hangar;
  @Input() isFormEnabled: boolean;

  @Output() hangarFormEmitter = new EventEmitter<Hangar>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm()
  }

  ngOnInit(): void {

   console.log(this.isFormEnabled);
   if (!this.isFormEnabled) {
      this.form.disable();
    }

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['hangar'] && changes['hangar'].currentValue) {
      this.form.patchValue(this.hangar);
    }
  }

  buildForm(): void {

    this.form = this.formBuilder.group({
      id: -1,
      name: [
        '',
        [ Validators.required, Validators.minLength(3)]
      ],
      location: [
        '',
        Validators.required
      ],
      owner: [
        '',
        Validators.required
      ],
      email: [
        '',
        Validators.required
      ],
      phone: [
        '',
        Validators.required
      ]
    });

  }

  submit(): void {
    this.hangarFormEmitter.emit(this.form.value as Hangar);
  }

}
