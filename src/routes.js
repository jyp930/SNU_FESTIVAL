import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Activity = lazy(() => import('@/pages/activity/ActivityRouter'));
const Performance = lazy(() => import('@/pages/Performance'));
const Event = lazy(() => import('@/pages/Event'));
const Apply = lazy(() => import('@/pages/Apply'));
const Introduction = lazy(() => import('@/pages/Introduction'));
const GuestBook = lazy(() => import('@/pages/GuestBook'));

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
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
    exact: true,
  },
  {
    path: '/apply',
    component: Apply,
    exact: true,
  },
  {
    path: '/introduction',
    component: Introduction,
    exact: true,
  },
  {
    path: '/guestbook',
    component: GuestBook,
    exact: true,
  },
];
export default routes;
