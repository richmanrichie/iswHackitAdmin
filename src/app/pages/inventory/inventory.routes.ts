import { Routes } from '@angular/router';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryViewComponent } from './inventory-view/inventory-view.component';


export const InventoryRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: InventoryListComponent,
      },
      {
        path: 'view',
        component: InventoryViewComponent,
      },
    ],
  },
];
