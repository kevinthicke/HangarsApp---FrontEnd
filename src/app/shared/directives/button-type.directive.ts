import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { query } from '@angular/animations';

@Directive({
  selector: '[ButtonType]'
})
export class ButtonTypeDirective implements OnInit {

  @Input('primaryType') primaryType?: boolean = true;

  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer2
  ) { }

  ngOnInit(): void {

    const button = this.elementRef.nativeElement.querySelector('div');
    const style = this.primaryType ? 'button-container-primary' : 'button-container-secondary';

    this.renderer.addClass(button, style);

  }

}
