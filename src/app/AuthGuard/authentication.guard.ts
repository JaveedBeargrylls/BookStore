import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from '../Services/authGuardService/authguard.service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authguardService: AuthguardService, private router: Router) { }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  
  canActivate(): boolean {  
    if (!this.authguardService.gettoken()) {  
        this.router.navigateByUrl("/orderlogin");  
    }  
    return this.authguardService.gettoken();
}
}