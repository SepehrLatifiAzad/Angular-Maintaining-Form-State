import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IRouter } from 'src/app/interface/router.interface';

@Injectable({
  providedIn: 'root',
})
export class RouterServiceService {
  routerHistory: IRouter[] = [];
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
}
