import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-service-toast',
  templateUrl: './error-service-toast.component.html',
  styleUrls: ['./error-service-toast.component.less']
})
export class ErrorServiceToastComponent implements OnInit {

  @Input() status: string;
  @Input() message: string;

  constructor() { }

  ngOnInit(): void { }

}
