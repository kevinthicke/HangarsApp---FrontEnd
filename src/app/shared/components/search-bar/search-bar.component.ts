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

    console.log(form.value.search);

    /*this.hangarService
        .getHangarByName(form.value.search)
        .subscribe((response) => {
          this.router.navigate(['/hangars/search-result'], { state: response });
          console.log(response);
        });
    */
  }

  ngOnInit() {
  }

}
