import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {HeroDetailComponent} from './hero-module/hero-list/hero-detail/hero-detail.component';

export interface IDeactivateComponent {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}


@Injectable()
export class DeactivateGuard implements CanDeactivate<IDeactivateComponent> {
  component: object;
  route: ActivatedRouteSnapshot;

  constructor() {
  }

  canDeactivate(component: IDeactivateComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot,
                nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return component.canExit ? component.canExit() : true;
  }

}
