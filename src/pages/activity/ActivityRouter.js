import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Lottie404 from '@F/lottie/Lottie404';

function ActivityRouter({ match }) {
  // TODO: router 버그 있음
  return (
    <Switch>
      { activityRoutes.map((route, index) => (
        <React.Fragment key={route.path}>
          <Route
            exact
            path={`${match.path}${route.path}`}
            component={route.component}
          />
          { route.children && route.children.map((childRoute) => (
            <Route
              exact
              path={`${match.path}${route.path}${childRoute.path}`}
              key={`${match.path}${route.path}${childRoute.path}`}
              component={childRoute.component}
            />
          ))}
          {(index === activityRoutes.length - 1) && <Route component={Lottie404} />}
        </React.Fragment>
      ))}
    </Switch>
  );
}
export default ActivityRouter;

ActivityRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const Radio = lazy(() => import('@/pages/activity/Radio'));
const MiniGame = lazy(() => import('@/pages/activity/mini/MiniGame'));
const GuessTheSong = lazy(() => import('@/pages/activity/mini/GuessTheSong'));
const TreasureHunt = lazy(() => import('@/pages/activity/mini/TreasureHunt'));
const Riddle = lazy(() => import('@/pages/activity/mini/Riddle'));
const BlackAndWhite = lazy(() => import('@/pages/activity/mini/BlackAndWhite'));

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
];
