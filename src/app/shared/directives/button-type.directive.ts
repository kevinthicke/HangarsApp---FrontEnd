import { Directive, ElementRef, Renderer2, Input, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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
  @Input('btype') type: string = 'button';
  @Input('icon') icon: string = '';

  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer2  ) { }

  ngOnInit(): void {

    this.setClass();
    this.setType();

    if (this.icon.length) {
      this.setIcon();
    }
    
  }

  private setClass(): void {
    this.renderer.addClass(
      this.elementRef.nativeElement.querySelector('.button-container'),
      this.class
    );
  }

  private setType(): void {
    this.renderer.setAttribute(
      this.elementRef.nativeElement.querySelector('button'),
      'type', this.type
    )
  }

  private setIcon(): void {

    const child = document.createElement('i');
    child.className = this.icon;

    this.renderer.appendChild(
      this.elementRef.nativeElement.querySelector('button'),
      child
    );

  }

}
