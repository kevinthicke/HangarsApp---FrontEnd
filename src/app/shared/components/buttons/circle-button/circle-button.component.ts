import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.less']
})
export class CircleButtonComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
