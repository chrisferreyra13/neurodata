import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Starter = React.lazy(() => import('./views/starter/Starter'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '', exact: true, name: 'Home' },
  { path: '/app', exact: Dashboard, name: 'Myapp', component: Dashboard},
  { path: '/app/dashboard', name: 'Dashboard', component: Dashboard},
  { path: '/app/starter', name: 'Starter', component: Starter },
  { path: '/app/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/app/theme/colors', name: 'Colors', component: Colors },
  { path: '/app/theme/typography', name: 'Typography', component: Typography },
  { path: '/app/base', name: 'Base', component: Cards, exact: true },
  { path: '/app/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/app/base/cards', name: 'Cards', component: Cards },
  { path: '/app/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/app/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/app/base/forms', name: 'Forms', component: BasicForms },
  { path: '/app/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/app/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/app/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/app/base/navs', name: 'Navs', component: Navs },
  { path: '/app/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/app/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/app/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/app/base/switches', name: 'Switches', component: Switches },
  { path: '/app/base/tables', name: 'Tables', component: Tables },
  { path: '/app/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/app/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/app/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/app/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/app/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/app/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/app/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/app/charts', name: 'Charts', component: Charts },
  { path: '/app/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/app/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/app/icons/flags', name: 'Flags', component: Flags },
  { path: '/app/icons/brands', name: 'Brands', component: Brands },
  { path: '/app/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/app/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/app/notifications/badges', name: 'Badges', component: Badges },
  { path: '/app/notifications/modals', name: 'Modals', component: Modals },
  { path: '/app/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/app/widgets', name: 'Widgets', component: Widgets },
  { path: '/app/users', exact: true,  name: 'Users', component: Users },
  { path: '/app/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
