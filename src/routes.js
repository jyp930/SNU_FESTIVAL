import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Activity = lazy(() => import('@/pages/activity/ActivityRouter'));
const Event = lazy(() => import('@/pages/Event'));
const Apply = lazy(() => import('@/pages/Apply'));
const Introduction = lazy(() => import('@/pages/Introduction'));
const GuestBook = lazy(() => import('@/pages/GuestBook'));
const Vote = lazy(() => import('@/pages/Vote'));
const HiSangmin = lazy(() => import('@/pages/HiSangmin'));

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  // {
  //   path: '/activity',
  //   component: Activity,
  // },
  // {
  //   path: '/event',
  //   component: Event,
  //   exact: true,
  // },
  // {
  //   path: '/apply',
  //   component: Apply,
  //   exact: true,
  // },
  {
    path: '/introduction',
    component: Introduction,
    exact: true,
  },
  // {
  //   path: '/guest-book',
  //   component: GuestBook,
  //   exact: true,
  // },
  {
    path: '/vote',
    component: Vote,
    exact: true,
  },
  // {
  //   path: '/hi-sangmin',
  //   component: HiSangmin,
  //   exact: true,
  // },
];
export default routes;
