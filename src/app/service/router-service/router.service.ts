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
      path: '/home',
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
    let index = this.routerHistory.findIndex(
      (item) => item.label === route.label
    );
    this.routerHistory.forEach((item) => (item.isActive = false));
    if (index == -1) {
      route.isActive = true;
      this.routerHistory.push(route);
    } else {
      this.routerHistory[index].isActive = true;
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
