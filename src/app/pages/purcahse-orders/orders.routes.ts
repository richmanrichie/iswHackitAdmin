import { Routes } from '@angular/router';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseViewComponent } from './purchase-view/purchase-view.component';

export const OrdersRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: PurchaseListComponent,
      },
      {
        path: 'view',
        component: PurchaseViewComponent,
      },
    ],
  },
];
