import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Activity = lazy(() => import('@/pages/Activity'));
const Performance = lazy(() => import('@/pages/Performance'));
const Event = lazy(() => import('@/pages/Event'));
const Apply = lazy(() => import('@/pages/Apply'));
const Introduction = lazy(() => import('@/pages/Introduction'));

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/activity',
    component: Activity,
  },
  {
    path: '/performance',
    component: Performance,
  },
  {
    path: '/event',
    component: Event,
  },
  {
    path: '/apply',
    component: Apply,
  },
  {
    path: '/introduction',
    component: Introduction,
  },
];
export default routes;
