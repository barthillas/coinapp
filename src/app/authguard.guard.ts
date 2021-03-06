import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService} from './user.service';
@Injectable()
export class AuthguardGuard implements CanActivate {
 
  constructor(private user:UserService){}
 
  canActivate(
    
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   
      return this.user.getUserLoggedIn();
      
      //
  }
}
