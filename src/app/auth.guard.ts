import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from './SERVICES/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private servicelgin:LoginService, private router:Router) { }
  canActivate():boolean{
    if(this.servicelgin.logedIn()){
      return true
    }
    this.router.navigate(["login"])
  return false;
  }
  
}
