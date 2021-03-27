import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Lottie404 from '@F/lottie/Lottie404';

function ActivityRouter({ match }) {
  return (
    <Switch>
      { activityRoutes.map((route) => (
        <Route
          exact
          key={`${match.path}${route.path}`}
          path={`${match.path}${route.path}`}
          component={route.component}
        />
      ))}
      <Route component={Lottie404} />
    </Switch>
  );
}
export default ActivityRouter;

ActivityRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const MiniGame = lazy(() => import('@/pages/activity/MiniGame'));

const activityRoutes = [
  {
    path: '/mini',
    component: MiniGame,
  },
];
