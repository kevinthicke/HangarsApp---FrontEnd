import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-counter-form',
  templateUrl: './quantity-counter-form.component.html',
  styleUrls: ['./quantity-counter-form.component.less']
})
export class QuantityCounterFormComponent implements OnInit {

  quantity: number = 0;
  @Output() quantityChangeEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  increaseQuantity() {
    this.quantityChangeEmitter.emit(++this.quantity);
  }

  decreaseQuantity() {

    if (this.quantity > 0) {
      this.quantityChangeEmitter.emit(--this.quantity);
    }

  }

}
