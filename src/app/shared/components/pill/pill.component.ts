import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.less']
})
export class PillComponent implements OnInit {

  @Input() pclass: string = 'pill-primary'

  constructor() { }

  ngOnInit(): void { }

}
