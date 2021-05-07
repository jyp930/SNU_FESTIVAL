import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import PropTypes from 'prop-types';
import { Example } from '@/pages/tarot/TarotDetail';

function TarotRouter({ match }) {
  return (
    <>
      { tarotRoutes.map((route) => (
        <React.Fragment key={route.path}>
          <Switch>
            <Route
              exact
              key={`${match.path}${route.path}`}
              path={`${match.path}${route.path}`}
              component={route.component}
            />

            { route.children && route.children.map((childRoute) => (
              <Route
                exact
                key={`${match.path}${route.path}${childRoute.path}`}
                path={`${match.path}${route.path}${childRoute.path}`}
                component={childRoute.component}
              />
            ))}

            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      ))}
    </>
  );
}
export default TarotRouter;

TarotRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const Tarot = lazy(() => import('@/pages/tarot/Tarot'));

const tarotRoutes = [
  {
    path: '',
    component: Tarot,
    children: [
      {
        path: '/example',
        component: Example,
      },
    ],
  },
];
