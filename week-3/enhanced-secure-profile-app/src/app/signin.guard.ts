import { Injectable } from '@angular/core';
//Title:  signin.guard.ts
//Author: John Vanhessche
//Date 14 January 2023
//Description:  TypeScript file for the singin component.

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { nextTick } from 'process';

@Injectable({
  providedIn: 'root'
})
export class SigninGuard implements CanActivate {

  constructor(private route: Router) {
    
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let isLoggedIn = next.queryParams.isLoggedIn;     //added in 3.4

    if(isLoggedIn) {                      //added in 3.4
      return true;
    } else {
      this.route.navigate(['/']);
      return false;
    }
  }
}
