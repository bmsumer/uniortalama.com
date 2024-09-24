import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { httpInterceptorProviders } from './interceptors';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SpinerService } from './shared-services/spiner.service';
import { CommonModule } from '@angular/common';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
  }
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      AppRoutingModule,
      AppLayoutModule,
      CommonModule,
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      })
    ],
    providers: [
      httpInterceptorProviders,
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      SpinerService
    ],
    bootstrap: [AppComponent]
  })
export class AppModule { }
