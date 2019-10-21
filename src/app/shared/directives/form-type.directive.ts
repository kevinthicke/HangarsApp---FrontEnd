import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[FormType]'
})
export class FormTypeDirective implements OnInit {

  @Input() isDisabled: string;

  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer2
  ) { }

  ngOnInit(): void {
    console.log(this.isDisabled);
    this.renderer.setAttribute(
      this.elementRef.nativeElement.querySelector('input'),
      'disabled',
      this.isDisabled.toString()
    );

  }

}
