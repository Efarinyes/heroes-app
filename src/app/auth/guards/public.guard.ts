import { Observable, map, tap } from "rxjs";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";

import { AuthService } from "../services/auth.service";



const checkAuthStatus = (): boolean | Observable<boolean> => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router)

  return authService.checkAuthStatus().pipe(

    tap((isAuthenticated) => {
      if ( isAuthenticated ) {
        router.navigate(['./'])
      }
    }),
    map(isAuthenticated => !isAuthenticated)
  );
};

export const canActitavateGuardPublic: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('Can Public Activated')
  console.log({route, state})

  return checkAuthStatus()
}

export const canMatchGuardPublic: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  console.log('Can Public Match')
  console.log({route, segments})

  return checkAuthStatus()
}
