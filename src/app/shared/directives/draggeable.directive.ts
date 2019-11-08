import { Directive, Component, HostListener, Renderer2, ElementRef, OnInit, NgModule } from '@angular/core';

@Directive({
  selector: '[Draggeable]'
})
export class DraggeableDirective implements OnInit {

  offset :[ number, number] = [0, 0];
  isDown : boolean = false;

  parentDiv;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {

    this.parentDiv = this.elementRef.nativeElement.firstElementChild;
    console.log(this.parentDiv);
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent): void {
    this.isDown = true;

    const strLeft: string = window.getComputedStyle(this.parentDiv).left;
    const left: number = +strLeft.substring(0, strLeft.length - 2);

    const strTop: string = window.getComputedStyle(this.parentDiv).top;
    const top: number = +strTop.substring(0, strTop.length - 2);

    this.offset = [
      left - event.clientX,
      top - event.clientY
    ];
  }

   @HostListener('mouseup', ['$event']) onMouseUp(event: MouseEvent): void {
    this.isDown = false;
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent): void {

    if (this.isDown) {

      const pair = [
        (event.clientX + this.offset[0]).toString() + 'px',
        (event.clientY + this.offset[1]).toString() + 'px'
      ];


      this.renderer.setStyle(
        this.parentDiv,
        'left',
        (event.clientX + this.offset[0]).toString() + 'px'
      );

      this.renderer.setStyle(
        this.parentDiv,
        'top',
        (event.clientY + this.offset[1]).toString() + 'px'
      );
    }

  }

}
