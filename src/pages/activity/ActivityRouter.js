import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Lottie404 from '@F/lottie/Lottie404';

function ActivityRouter({ match }) {
  // TODO: router 버그 있음
  return (
    <>
      <Switch>
        <Route
          exact
          path={`${match.path}${activityRoutes[0].path}`}
          component={activityRoutes[0].component}
        />
        { activityRoutes[0].children && activityRoutes[0].children.map((childRoute) => (
          <Route
            exact
            path={`${match.path}${activityRoutes[0].path}${childRoute.path}`}
            key={`${match.path}${activityRoutes[0].path}${childRoute.path}`}
            component={childRoute.component}
          />
        ))}

        <Route
          exact
          path={`${match.path}${activityRoutes[1].path}`}
          component={activityRoutes[1].component}
        />
        <Route
          exact
          path={`${match.path}${activityRoutes[2].path}`}
          component={activityRoutes[2].component}
        />
        <Route
          exact
          path={`${match.path}${activityRoutes[3].path}`}
          component={activityRoutes[3].component}
        />
        <Route component={Lottie404} />
      </Switch>
      {/* { activityRoutes.map((route, index) => ( */}
      {/*  <React.Fragment key={route.path}> */}
      {/*    <Switch> */}
      {/*      <Route */}
      {/*        exact */}
      {/*        path={`${match.path}${route.path}`} */}
      {/*        component={route.component} */}
      {/*      /> */}
      {/*      { route.children && route.children.map((childRoute) => ( */}
      {/*        <Route */}
      {/*          exact */}
      {/*          path={`${match.path}${route.path}${childRoute.path}`} */}
      {/*          key={`${match.path}${route.path}${childRoute.path}`} */}
      {/*          component={childRoute.component} */}
      {/*        /> */}
      {/*      ))} */}
      {/*      <Route component={Lottie404} /> */}
      {/*    </Switch> */}
      {/*  </React.Fragment> */}
      {/* ))} */}
    </>
  );
}
export default ActivityRouter;

ActivityRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const MiniGame = lazy(() => import('@/pages/activity/mini/MiniGame'));
const GuessTheSong = lazy(() => import('@/pages/activity/mini/GuessTheSong'));
const TreasureHunt = lazy(() => import('@/pages/activity/mini/TreasureHunt'));
const Riddle = lazy(() => import('@/pages/activity/mini/Riddle'));
const BlackAndWhite = lazy(() => import('@/pages/activity/mini/BlackAndWhite'));
const Radio = lazy(() => import('@/pages/activity/Radio'));
const Competition = lazy(() => import('@/pages/activity/Competition'));
const Group = lazy(() => import('@/pages/activity/Group'));

const activityRoutes = [
  {
    path: '/mini',
    component: MiniGame,
    children: [
      {
        path: '/guess-the-song',
        component: GuessTheSong,
      },
      {
        path: '/treasure-hunt',
        component: TreasureHunt,
      },
      {
        path: '/riddle',
        component: Riddle,
      },
      {
        path: '/black-and-white',
        component: BlackAndWhite,
      },
    ],
  },
  {
    path: '/radio',
    component: Radio,
  },
  {
    path: '/competition',
    component: Competition,
  },
  {
    path: '/group',
    component: Group,
  },
];
