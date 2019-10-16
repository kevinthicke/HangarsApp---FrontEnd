import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rectangle-button',
  templateUrl: './rectangle-button.component.html',
  styleUrls: ['./rectangle-button.component.less']
})
export class RectangleButtonComponent implements OnInit {

  @Input() text: string;
//  @Input() style: string;

  ngOnInit(): void { }

}
