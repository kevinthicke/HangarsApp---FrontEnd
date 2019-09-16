import { Component, OnInit, Input } from '@angular/core';
import { ErrorToastService } from '../../../core/services/error-toast.service';
import { fade } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  animations: [ fade ]
})
export class MainComponent implements OnInit {

  @Input() renderShoppingCart: boolean;

  constructor(public errorToastService: ErrorToastService) { }

  ngOnInit(): void { }

  handleCloseToast(): void {
    this.errorToastService.hide();
  }

}
