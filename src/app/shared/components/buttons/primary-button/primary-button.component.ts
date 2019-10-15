import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.less']
})
export class PrimaryButtonComponent implements OnInit {

  @Input() text: string;
  @Input() style: string = 'secondary';

  ngOnInit(): void { }


}
