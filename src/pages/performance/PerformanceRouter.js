import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Lottie404 from '@F/lottie/Lottie404';

function PerformanceRouter({ match }) {
  return (
    <>
      { performanceRoutes.map((route) => (
        <React.Fragment key={route.path}>
          <Switch>
            { route.component && (
              <Route
                exact
                key={`${match.path}${route.path}`}
                path={`${match.path}${route.path}`}
                component={route.component}
              />
            )}
            <Route component={Lottie404} />
          </Switch>
        </React.Fragment>
      ))}
    </>
  );
}
export default PerformanceRouter;

PerformanceRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const PhoneCert = lazy(() => import('@/pages/performance/PhoneCert'));

const performanceRoutes = [
  {
    path: '/phone-cert',
    component: PhoneCert,
  },
];
