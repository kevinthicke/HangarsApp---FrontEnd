import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-button-aux',
  templateUrl: './circle-button-aux.component.html',
  styleUrls: ['./circle-button-aux.component.less']
})
export class CircleButtonAuxComponent implements OnInit {

  @Input() text;

  constructor() { }

  ngOnInit() {
  }
}
