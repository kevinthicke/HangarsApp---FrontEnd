import { Directive, ElementRef, Input, OnInit, Renderer2, SimpleChange } from '@angular/core';

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

  ngOnChanges(changes: SimpleChange): void {
    this.removeClass(changes.previousValue);
    this.setClass();
  }


  ngOnInit(): void {

    this.setType();
    this.setClass()
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

  private removeClass(previousClass: string): void {
    this.renderer.removeClass(
      this.elementRef.nativeElement.querySelector('.button-container'),
      previousClass
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
