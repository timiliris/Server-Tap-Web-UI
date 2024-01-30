import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../auth.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Vérifier si l'utilisateur est connecté en utilisant le service AuthService
    if (this.authService.UserLogged()) {
      return true; // Laisser l'accès à la route
    } else {
      // Si l'utilisateur n'est pas connecté, rediriger vers la page d'authentification
      return this.router.createUrlTree(['/auth']);
    }
  }
}
