import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  @Input() bclass : string = 'button-rectangle-primary';
  @Input() type   : string = 'button';
  @Input() icon   : string = '';

  ngOnInit(): void { }


}
