import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { AuthService } from '../services/auth.service';


const checkAuthStatus = (): boolean | Observable<boolean> => {
  //se inyectan el AuthService y el Router
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthStatus().pipe(
    tap((isAuthenticated) => {
      if (!isAuthenticated) {
        router.navigate(['/auth/login']);
      }
    })
  );
};


export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('Can Activated')
  console.log({route, state})

  return checkAuthStatus()
}
 export const canMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
 ) => {
  console.log('Can Match')
  console.log({route, segments})

  return checkAuthStatus()
 }








