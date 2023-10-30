import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IRouter } from 'src/app/interface/router.interface';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  private routerHistory: IRouter[] = [];
  private historySubject = new BehaviorSubject<IRouter[]>(this.routerHistory);

  getHistory(): Observable<IRouter[]> {
    return this.historySubject.asObservable();
  }

  constructor(private router: Router) {}

  navigateTo(route: IRouter): void {
    this.router.navigate([route.path]);
    let index = this.routerHistory.findIndex(
      (item) => item.label === route.label
    );
    if (index !== -1) {
      this.routerHistory.push(route);
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
