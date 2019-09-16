import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aux-navbar',
  templateUrl: './aux-navbar.component.html',
  styleUrls: ['./aux-navbar.component.less']
})
export class AuxNavbarComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
