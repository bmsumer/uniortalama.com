import { JwtInterceptor } from './jwt-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


export const httpInterceptorProviders = [
//   { provide: HTTP_INTERCEPTORS, useClass: S3DCUEsmaAuthTokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
];
