import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate, query } from '@angular/animations';
import { Hangar } from '../../../../core/models/hangar.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  animations: [
    trigger('hangar-list-animation', [
      transition(':enter', [
        query('li', [
          style({ transform: 'translateX(-50px)' }),
          animate(500)
        ])
      ])
    ])
   ]
})
export class ListComponent implements OnInit {

  @Input() hangars: Hangar[];

  hangar: Hangar;
  click = false;
  item = -1;

  @Output() event = new EventEmitter<any>();

  @Output() nextPageEvent = new EventEmitter();

  @Output() previousPageEvent = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() { }

  private select(hangar: Hangar, i: number) {

    if (this.item !== i) {
      this.click = !this.click;
      this.item = i;
    } else {
      this.item = -1;
    }

    this.hangar = hangar;

    const item = this.item;
    this.event.emit({ hangar, item });
  }

  nextPage() {
    this.nextPageEvent.emit();
  }

  previousPage() {
    this.previousPageEvent.emit();
  }

  private goDetails(hangar){
    this.router.navigate(['hangars/details'], { state: hangar });
  }

}
