import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Activity = lazy(() => import('@/pages/Activity'));

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/activity',
    component: Activity,
  },
];
export default routes;
