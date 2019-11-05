import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-info-toast',
  templateUrl: './info-toast.component.html',
  styleUrls: ['./info-toast.component.less']
})
export class InfoToastComponent implements OnInit {

  @Input() tclass: string;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {

    if (this.tclass && this.tclass.includes('animate')) {
      this.renderer.addClass(this.elementRef.nativeElement.querySelector('div'), 'animate');
    }

    if (this.tclass && this.tclass.includes('left')) {
      this.renderer.addClass(this.elementRef.nativeElement.querySelector('div'), 'left');
    }

    if (this.tclass && this.tclass.includes('right')) {
      this.renderer.addClass(this.elementRef.nativeElement.querySelector('div'), 'right');
    }

  }

}
