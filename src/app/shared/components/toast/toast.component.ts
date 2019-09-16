import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.less']
})
export class ToastComponent implements OnInit {
  @Input() text;
  @Input() style = 'primary';
  
  constructor() { }

  ngOnInit() { }

}
