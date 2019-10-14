import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment';
import { effects } from '../store/effects/index';
import { metaReducers, rootReducers } from '../store/reducers/index';
import { CustomSerializer } from '../store/utils/custom-serializer.util';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpErrorInterceptor } from './core/utils/http-error-interceptor';
import { HttpLoaderInterceptor } from './core/utils/http-loader-interceptor';
import { LayoutModule } from './layout/layout.module';
import { BasicAuthorizationHttpInterceptService } from './security/services/basic-authorization-http-intercept.service';
import { LoginContainer } from './security/containers/login/login.container';g
import { LoginComponent } from './security/views/login/login.component';
import { LogoutComponent } from './security/views/logout/logout.component';
import { RegisterComponent } from './security/views/register/register.component';
import { SharedModule } from './shared/shared.module';
import { RegisterContainer } from './security/containers/register/register.container';
import { ProductCrudComponent } from './products/views/product-crud/product-crud.component';

export const routerStateConfig = {
  stateKey: 'router', // state-slice name for routing state
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    LoginContainer,
    RegisterContainer
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
    StoreRouterConnectingModule.forRoot(),
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
    }),
    EffectsModule.forRoot(effects)
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
    },
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
