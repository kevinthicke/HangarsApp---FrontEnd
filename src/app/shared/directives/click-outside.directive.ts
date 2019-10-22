import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[ClickOutSide]'
})
export class ClickOutSideDirective {

  @Output() clickOutSide = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  public onClick(event): void {

    const isClickInside = this.elementRef['nativeElement'].contains(event.target);

    if (isClickInside) {
      this.clickOutSide.emit();
    }

  }

}
