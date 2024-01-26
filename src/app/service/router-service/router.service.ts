import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IRouter } from 'src/app/interface/router.interface';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  // main routes for the application
  routes: IRouter[] = [
    {
      label: 'Home',
      path: '/',
      isActive: false,
    },
    {
      label: 'Form 1',
      path: '/form1',
      isActive: false,
    },
    {
      label: 'Form 2',
      path: '/form2',
      isActive: false,
    },
    {
      label: 'Form 3',
      path: '/form3',
      isActive: false,
    },
  ];
  private routerHistory: IRouter[] = [];
  private historySubject = new BehaviorSubject<IRouter[]>(this.routerHistory);

  /**
   * @description get the history of the router as an observable
   * @returns Observable<IRouter[]>
   * @memberof RouterService
   */
  getHistory(): Observable<IRouter[]> {
    return this.historySubject.asObservable();
  }

  constructor(private router: Router) {}

  /**
   * @description navigate to a route and add it to the history
   * @param route route to navigate to
   * @returns void
   * @memberof RouterService
   */
  navigateTo(route: IRouter, data?: Object): void {
    let currentRoute = this.routes.find(
      (item) => item.path === this.router.url
    );
    let index = this.routerHistory.findIndex(
      (item) => item.path === this.router.url
    );

    if (index === -1) {
      this.routerHistory.push(currentRoute!);
    }
  }

  /**
   * @description delete a route from the history
   * @param route route to delete from the history
   * @returns void
   * @memberof RouterService
   */
  deleteFromHistory(route: IRouter): void {
    let index = this.routerHistory.findIndex(
      (item) => item.label === route.label
    );
    if (index !== -1) {
      this.routerHistory.splice(index, 1);
    }
  }
}
