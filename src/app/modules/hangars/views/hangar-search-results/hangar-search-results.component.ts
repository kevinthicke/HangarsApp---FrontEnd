import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hangar } from '../../../../core/models/hangar.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hangar-search-results',
  templateUrl: './hangar-search-results.component.html',
  styleUrls: ['./hangar-search-results.component.less']
})
export class HangarSearchResultsComponent implements OnInit {
  state$: Observable<any>;
  private hangars: Hangar[];
  private hangar: Hangar;

  private click = false;
  private item = -1;

  private showMenu: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.state$ = this.route
                      .paramMap
                      .pipe(() => window.history.state);
    this.hangars = Object.values(this.state$);
  }

  private expandMenu() {
    if(this.item == -1) {
      this.router.navigate(['hangars', 'insert']);
    } else {
      this.showMenu = !this.showMenu;
    }
  }

  private handleHangar({ hangar, item }) {
    this.hangar = hangar;
    this.item = item;
  }
}
