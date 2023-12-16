import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./pages/my-ads/my-ads.page').then((m) => m.MyAdsPage),
  // },
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./pages/detail/detail.page').then((m) => m.DetailPage),
  // },

  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./pages/sell/sell.page').then((m) => m.SellPage),
  // },

  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../app/pages/off-campus/off-campus.page').then(
            (m) => m.OffCampusPage
          ),
      },
      {
        path: 'properties',
        loadComponent: () =>
          import('../app/pages/properties/properties.page').then(
            (m) => m.PropertiesPage
          ),
      },
      {
        path: 'auctions',
        loadComponent: () =>
          import('../app/pages/auctions/auctions.page').then(
            (m) => m.AuctionsPage
          ),
      },
      // {
      //   path: '',
      //   redirectTo: '/pages/off-campus',
      //   pathMatch: 'full',
      // },
    ],
    // loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'detail',
    loadComponent: () =>
      import('./pages/detail/detail.page').then((m) => m.DetailPage),
  },

  {
    path: 'home-wrapper',
    loadComponent: () =>
      import('./shared/UI/home-wrapper/home-wrapper.page').then(
        (m) => m.HomeWrapperPage
      ),
  },
  {
    path: 'footer',
    loadComponent: () =>
      import('./components/footer/footer.page').then((m) => m.FooterPage),
  },

  {
    path: 'header2',
    loadComponent: () =>
      import('./components/header2/header2.page').then((m) => m.Header2Page),
  },

  {
    path: 'detail-body',
    loadComponent: () =>
      import('./pages/detail/detail-body/detail-body.page').then(
        (m) => m.DetailBodyPage
      ),
  },
  {
    path: 'nav2',
    loadComponent: () =>
      import('./components/nav2/nav2.page').then((m) => m.Nav2Page),
  },
  {
    path: 'carousel',
    loadComponent: () =>
      import('./shared/UI/carousel/carousel.page').then((m) => m.CarouselPage),
  },
  {
    path: 'card',
    loadComponent: () =>
      import('./shared/UI/card/card.page').then((m) => m.CardPage),
  },
  {
    path: 'sign-in',
    loadComponent: () =>
      import('./pages/sign-in/sign-in.page').then((m) => m.SignInPage),
  },
  {
    path: 'sell',
    loadComponent: () =>
      import('./pages/sell/sell.page').then((m) => m.SellPage),
  },
  {
    path: 'my-ads',
    loadComponent: () =>
      import('./pages/my-ads/my-ads.page').then((m) => m.MyAdsPage),
  },
  {
    path: 'footer-nav',
    loadComponent: () =>
      import('./components/footer-nav/footer-nav.page').then(
        (m) => m.FooterNavPage
      ),
  },
  {
    path: 'photos',
    loadComponent: () =>
      import('./pages/photos/photos.page').then((m) => m.PhotosPage),
  },
  {
    path: 'photo',
    loadComponent: () =>
      import('./pages/photos/photo/photo.page').then((m) => m.PhotoPage),
  },
];
