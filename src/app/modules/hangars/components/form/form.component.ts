import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Hangar } from '../../../../core/models/hangar.model';
import { fade } from '../../../../shared/animations/fade.animation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  animations: [ fade ]
})
export class FormComponent implements OnInit {

  @Input() readonlyState;
  @Input() hangar: Hangar;
  @Output() inputChange = new EventEmitter<any>();
  @Input() buttonDisabled = false;
  inputClass: string;

  private form = new FormGroup({
    'name': new FormControl(
      '',
      [ Validators.required, Validators.minLength(3)]),
    'location': new FormControl(
      '',
      Validators.required),
    'owner': new FormControl(
      '',
      Validators.required),
    'email': new FormControl(
      '',
      [Validators.required, Validators.email ]),
    'phone': new FormControl(
      '',
      Validators.required)
  })

  constructor() {
   }

  ngOnInit() {
    this.inputClass = this.readonlyState ? 'form-control-plaintext' : 'form-control';

    if (this.hangar) {
      const { id, name, location, owner, email, phone } = this.hangar;

      this.name.setValue(name);
      this.location.setValue(location);
      this.owner.setValue(owner);
      this.ownerEmail.setValue(email);
      this.phoneNumber.setValue(phone);
    }

  }

  public getInput(id: number) {
    this.inputChange.emit({ ...this.form.value, id });
  }

  get name() {
    return this.form.get('name');
  }

  get location() {
    return this.form.get('location');
  }

  get owner() {
    return this.form.get('owner');
  }

  get ownerEmail() {
    return this.form.get('email');
  }

  get phoneNumber() {
    return this.form.get('phone');
  }

}
