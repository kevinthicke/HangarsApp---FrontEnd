import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SecurityFacade } from '../../../../store/facades/security.facade';

@Component({
  selector: 'app-navbar-container',
  templateUrl: './navbar.container.html',
  styleUrls: ['./navbar.container.less']
})
export class NavbarContainer implements OnInit {

  @Input() activeLang: string;

  @Output() changeLanguageEmitter = new EventEmitter<void>();
  @Output() shoppingCartRenderEmitter = new EventEmitter<void>();

  constructor(
    private securityFacade: SecurityFacade
  ) { }

  ngOnInit(): void { }

  handleChangeLanguage(): void {
    this.changeLanguageEmitter.emit();
  }

  handleLogOut(): void {
    this.securityFacade.logOut();
  }

}
 