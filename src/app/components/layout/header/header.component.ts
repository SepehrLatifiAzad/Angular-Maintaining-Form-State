import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IRouter } from 'src/app/interface/router.interface';
import { RouterService } from 'src/app/service/router-service/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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
  routeHistory$: Observable<IRouter[]> = this.routerService.getHistory();
  constructor(private routerService: RouterService) {}

  navigateTo(route: IRouter): void {
    this.routerService.navigateTo(route);
  }
  removeRouteHistory(route: IRouter): void {
    this.routerService.deleteFromHistory(route);
  }
}
