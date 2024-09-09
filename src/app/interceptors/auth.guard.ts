import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../pages/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
        let data: any = next.routeConfig?.data;
        if(data.permissionsToCheck){
            let isLoggedIn = this.authService.isAuthenticated(data?.permissionsToCheck);
            if (isLoggedIn){
                return true
            } else {
                this.router.navigate(['/auth/access']);
            }
        }
    return true;
    // if (/* your authentication condition */) {
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
  }
}
