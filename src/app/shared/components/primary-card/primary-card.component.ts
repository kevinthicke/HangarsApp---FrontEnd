import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primary-card',
  templateUrl: './primary-card.component.html',
  styleUrls: ['./primary-card.component.less']
})
export class PrimaryCardComponent implements OnInit {
  @Input() title: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() { }

}
