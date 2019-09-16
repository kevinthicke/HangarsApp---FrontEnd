import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.less']
})
export class SecondaryButtonComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }


}
