import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IRouter } from 'src/app/interface/router.interface';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  routes: IRouter[] = [
    {
      label: 'Home',
      path: '/',
      icon: 'home',
      isActive: false,
    },
    {
      label: 'About',
      path: '/about',
      icon: 'info',
      isActive: false,
    },
    {
      label: 'Contact',
      path: '/contact',
      icon: 'contacts',
      isActive: false,
    },
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: 'dashboard',
      isActive: false,
    },
  ];
  private routerHistory: IRouter[] = [];
  private historySubject = new BehaviorSubject<IRouter[]>(this.routerHistory);

  getHistory(): Observable<IRouter[]> {
    return this.historySubject.asObservable();
  }

  constructor(private router: Router) {}

  navigateTo(route: IRouter): void {
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

  deleteFromHistory(route: IRouter): void {
    let index = this.routerHistory.findIndex(
      (item) => item.label === route.label
    );
    if (index !== -1) {
      this.routerHistory.splice(index, 1);
    }
  }
}
