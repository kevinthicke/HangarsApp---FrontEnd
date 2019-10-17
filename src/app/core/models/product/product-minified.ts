import { Injectable } from '@angular/core';
import { Adapter } from '../auxiliary/adapter';
import { Deserializer } from '../auxiliary/deserializer';

export class ProductMinified  {

  constructor(
    public id: number,
    public name: string,
    public price: number
  ) { }

}
