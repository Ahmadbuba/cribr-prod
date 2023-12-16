import { Routes } from '@angular/router';
import { HomePage } from './home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../pages/off-campus/off-campus.page').then(
            (m) => m.OffCampusPage
          ),
      },
      {
        path: 'properties',
        loadComponent: () =>
          import('../pages/properties/properties.page').then(
            (m) => m.PropertiesPage
          ),
      },
      {
        path: 'auctions',
        loadComponent: () =>
          import('../pages/auctions/auctions.page').then((m) => m.AuctionsPage),
      },
      {
        path: '',
        redirectTo: '/pages/off-campus',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/pages/off-campus',
    pathMatch: 'full',
  },
];
