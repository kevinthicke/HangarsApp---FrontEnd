import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Hangar } from '../../../../core/models/hangar/hangar.model';

@Component({
  selector: 'app-hangar-crud',
  templateUrl: './hangar-crud.component.html',
  styleUrls: ['./hangar-crud.component.less']
})
export class HangarCrudComponent implements OnInit {

  @Input() hangar: Hangar;
  @Input() isFormEnabled: boolean;

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
    console.log(this.form.value);
  }

}
