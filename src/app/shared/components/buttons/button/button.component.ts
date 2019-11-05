import { Component, OnInit, Input, HostListener } from '@angular/core';
import { fullFade } from 'src/app/shared/animations/fade.animation';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
  animations: [ fullFade ]
})
export class ButtonComponent implements OnInit {

  @Input() bclass       : string = 'button-rectangle-primary';
  @Input() btype        : string = 'button';
  @Input() icon         : string = '';
  @Input() toastMessage : string;

  isInfoToastRendered: boolean = false;

  ngOnInit(): void { }

  renderInfoToast(): void {
    this.isInfoToastRendered = true;
  }

  hideInfoToast(): void {
    this.isInfoToastRendered = false;
  }

}
