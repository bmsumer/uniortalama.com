import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { UserModel } from '../models';
import { finalize } from 'rxjs/operators';
import { SpinerService } from '../shared-services/spiner.service';
import { environment } from '../../environments/environment';
// import { AuthService } from '../pages/auth/services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    subscription: Subscription;
    activeUser: UserModel = new UserModel();


    constructor(
        private router: Router,
        private spiner: SpinerService,
        // public authService: AuthService
    ) {
        // this.subscription = this.authService.activeUser$.subscribe(data => this.activeUser = data);

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spiner.set(true);
        const isApiUrl = request.url.startsWith(environment.baseUrl);
        let token = this.activeUser.token;
        let refreshToken = this.activeUser.refreshToken;
        // console.log('activeUser: ', this.activeUser)
        if (!request.url.includes('/login') && token && token != "") {
            if (request.url.includes('/refresh-token')) {
                request = request.clone({
                    setHeaders: {
                        // Authorization: `${token}`,
                        'Refreshtoken': refreshToken,
                    }
                });
            }
            else {
                request = request.clone({
                    setHeaders: {
                        Authorization: `${token}`
                    }
                });

            }
        }
        else if ((!token || token == "") && !request.url.includes('/assets')) {
            // this.router.navigate(['/auth/login']);
            this.router.navigate(['/']);
        }

        return next.handle(request).pipe(
            finalize(() => {
                // console.log('REQ Method: ', request.method);
                this.spiner.set(false);
            }),
            catchError((error) => {
                this.spiner.set(false);
                if (error.status == 401) {
                    localStorage.setItem('lastPage', this.router.url)
                    this.router.navigate(['/auth/lockscreen'])
                }
                //   if (error instanceof HttpErrorResponse) {
                //   localStorage.removeItem('token');
                //   this.router.navigate(['/auth/login']);
                //   }
                return throwError(() => new Error('The Error'));
                // return throwError(() => error);
            }));

    }

}
