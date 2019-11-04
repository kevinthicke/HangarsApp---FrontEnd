import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from '../../../core/models/commerce/shopping-cart.model';
import { fade } from '../../animations/fade.animation';

@Component({
  selector: 'app-small-toast',
  templateUrl: './small-toast.component.html',
  styleUrls: ['./small-toast.component.less'],
  animations: [ fade ]
  })
export class SmallToastComponent implements OnInit {

  @Input() shoppingCart: ShoppingCart;

  isSmallToastMinified: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  minimize(): void {
    this.isSmallToastMinified = !this.isSmallToastMinified;
  }

}
