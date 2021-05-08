import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const TarotRouter = lazy(() => import('@/pages/tarot/TarotRouter'));
const ActivityRouter = lazy(() => import('@/pages/activity/ActivityRouter'));
const PerformanceRouter = lazy(() => import('@/pages/performance/PerformanceRouter'));
const Apply = lazy(() => import('@/pages/Apply'));
const Introduction = lazy(() => import('@/pages/Introduction'));
const GuestBook = lazy(() => import('@/pages/GuestBook'));
const Vote = lazy(() => import('@/pages/Vote'));
const GoodsRouter = lazy(() => import('@/pages/goods/GoodsRouter'));

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/tarot',
    component: TarotRouter,
  },
  // {
  //   path: '/activity',
  //   component: ActivityRouter,
  // },
  // {
  //   path: '/performance',
  //   component: PerformanceRouter,
  // },
  // {
  //   path: '/apply',
  //   component: Apply,
  //   exact: true,
  // },
  // {
  //   path: '/introduction',
  //   component: Introduction,
  //   exact: true,
  // },
  // {
  //   path: '/guest-book',
  //   component: GuestBook,
  //   exact: true,
  // },
  // {
  //   path: '/vote',
  //   component: Vote,
  //   exact: true,
  // },
  // {
  //   path: '/goods',
  //   component: GoodsRouter,
  // },
];
export default routes;
