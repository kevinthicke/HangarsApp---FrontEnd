import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {

  @Output() searchValueEmitter = new EventEmitter<string>();

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      search: new FormControl('')
    })

  }

  onSubmit() {
    this.searchValueEmitter.emit(this.form.value['search']);
  }

}
