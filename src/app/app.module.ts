import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './security/views/login/login.component';
import { LogoutComponent } from './security/views/logout/logout.component';
import { RegisterComponent } from './security/views/register/register.component';
import { BasicAuthorizationHttpInterceptService } from './security/services/basic-authorization-http-intercept.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorInterceptor } from './core/utils/http-error-interceptor';
import { HttpLoaderInterceptor } from './core/utils/http-loader-interceptor';
import { StoreModule } from '@ngrx/store';
import { shoppingCartReducer } from 'src/store/reducers/shopping-cart.reducer';
import { environment } from '../environments/environment';
import { rootReducers, metaReducers } from '../store/reducers/index';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, LogoutComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [ HttpClient ]
      }
    }),
    StoreModule.forRoot(rootReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthorizationHttpInterceptService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
