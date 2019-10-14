import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {

  constructor() { }
//  constructor(private hangarService: HangarService, private router: Router) { }

  onSubmit(form: NgForm) {

  }

  ngOnInit() {
  }

}
