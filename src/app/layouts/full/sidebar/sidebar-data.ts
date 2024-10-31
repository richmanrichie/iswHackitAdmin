import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    bgcolor: 'primary',
    route: '/dashboard',
  },
  {
    navCap: 'Administration',
  },
  {
    displayName: 'Organisations',
    iconName: 'rosette',
    bgcolor: 'accent',
    route: '/organisations/list',
  },
  // {
  //   displayName: 'Staff',
  //   iconName: 'rosette',
  //   bgcolor: 'accent',
  //   route: '/organisations/staff',
  // },
  {
    displayName: 'Purchase Orders',
    iconName: 'poker-chip',
    bgcolor: 'warning',
    route: '/orders/list',
  },
  {
    displayName: 'Inventory',
    iconName: 'list',
    bgcolor: 'success',
    route: '/inventory/list',
  },
  {
    displayName: 'Vendors',
    iconName: 'tooltip',
    bgcolor: 'success',
    route: '/ui-components/lists',
  },
  // {
  //   displayName: 'Menu',
  //   iconName: 'layout-navbar-expand',
  //   bgcolor: 'error',
  //   route: '/ui-components/menu',
  // },
  // {
  //   displayName: 'Tooltips',
  //   iconName: 'tooltip',
  //   bgcolor: 'primary',
  //   route: '/ui-components/tooltips',
  // },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Settings',
    iconName: 'lock',
    bgcolor: 'accent',
    route: '/authentication/login',
  },
  {
    displayName: 'Profile',
    iconName: 'lock',
    bgcolor: 'accent',
    route: '/authentication/login',
  }
];
