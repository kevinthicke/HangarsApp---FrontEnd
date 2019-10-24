import { Directive, HostListener, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[MouseHover]'
})
export class HoverDirective {

  @Output() mouseEnterEmitter = new EventEmitter<void>();
  @Output() mouseLeaveEmitter = new EventEmitter<void>();

  constructor() { }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.mouseEnterEmitter.emit();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.mouseLeaveEmitter.emit();
  }

}
