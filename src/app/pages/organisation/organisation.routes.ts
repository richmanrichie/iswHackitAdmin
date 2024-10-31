import { Routes } from '@angular/router';

import { OrganisationListComponent } from './organisation-list/organisation-list.component';
import { OrganisationViewComponent } from './organisation-view/organisation-view.component';

export const OrganisationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: OrganisationListComponent,
      },
      {
        path: 'view',
        component: OrganisationViewComponent,
      },
    ],
  },
];
