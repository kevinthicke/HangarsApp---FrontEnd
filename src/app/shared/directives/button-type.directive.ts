import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

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

    const button = this.elementRef.nativeElement.querySelector('button');
    const style = this.primaryType ? 'custom-button-primary' : 'custom-button-secondary';

    this.renderer.addClass(button, style);

  }

}
