import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

type classType = (
  'button-rectangle-primary' |
  'button-rectangle-secondary' |
  'button-circle-primary'
);

@Directive({
  selector: '[ButtonType]'
})
export class ButtonTypeDirective implements OnInit {
  
  @Input('bclass') class?: classType;
  @Input('type') type: string = 'button';

  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer2
  ) { }

  ngOnInit(): void {

    this.renderer.addClass(
      this.elementRef.nativeElement.querySelector('div'),
      this.class
    );

    this.renderer.setAttribute(
      this.elementRef.nativeElement.querySelector('button'),
      'type', this.type
    )

  }

}
