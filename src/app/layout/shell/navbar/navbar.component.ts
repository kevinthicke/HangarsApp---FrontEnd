import { Component, OnInit, Output, EventEmitter, Input, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../security/services/authentication.service';
import { LoadingSpinnerService } from '../../../core/services/loading-spinner.service';
import { fade } from 'src/app/shared/animations/fade.animation';
import { Subject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from '../../../../store/state/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  animations: [ fade ]
})
export class NavbarComponent implements OnInit {

  buttons = [
    {
      title: 'navbar.home',
      link: '/',
    },
    {
      title: 'navbar.hangars',
      link: '/hangars'
    },
    {
      title: 'navbar.products',
      link: '/products'
    },
    {
      title: 'navbar.shop',
      link: '/commerce'
    },
  ];

  @Input() activeLang: string;
  @Input() userName: string;

  @Output() changeLanguageEmitter = new EventEmitter<void>();
  @Output() logOutEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void { }

  changeLanguage(): void {
    this.changeLanguageEmitter.emit();
  }

  logOut(): void {
    this.logOutEmitter.emit();
  }

}
