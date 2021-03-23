import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Activity = lazy(() => import('@/pages/Activity'));
const Performance = lazy(() => import('@/pages/Performance'));
const Event = lazy(() => import('@/pages/Event'));
const Apply = lazy(() => import('@/pages/Apply'));
const Introduction = lazy(() => import('@/pages/Introduction'));
const GuestBook = lazy(() => import('@/pages/GuestBook'));

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
  {
    path: '/guestbook',
    component: GuestBook,
  },
];
export default routes;
