import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router'
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class IsAuthGuard implements CanActivate {
    constructor(){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(localStorage.getItem('token') != null){
            return true;
        }
        return false;
    }
}
