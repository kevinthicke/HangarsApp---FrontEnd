import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-button',
  templateUrl: './shopping-cart-button.component.html',
  styleUrls: ['./shopping-cart-button.component.less']
})
export class ShoppingCartButtonComponent implements OnInit {

  @Input() text: string;
  @Input() quantity: number;

  constructor() { }

  ngOnInit() { }

}
