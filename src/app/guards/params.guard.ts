import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParamsGuard implements CanActivate {
  activar = false;
  constructor(public route:ActivatedRoute) {
     
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (route.paramMap.get('id')){
      this.activar = true
    }else{
      alert('No se ingreso el Id de ningun usuario')
    }
    return this.activar
    }
  
}
