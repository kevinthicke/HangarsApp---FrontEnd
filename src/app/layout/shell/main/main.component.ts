import { Component, Input, OnInit } from '@angular/core';
import { Error } from 'src/app/core/models/auxiliary/error.model';
import { fade } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  animations: [ fade ]
})
export class MainComponent implements OnInit {

  @Input() error: Error;
  @Input() renderShoppingCart: boolean;

  constructor() { }

  ngOnInit(): void { }

}
