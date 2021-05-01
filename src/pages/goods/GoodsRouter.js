import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Lottie404 from '@F/lottie/Lottie404';

function GoodsRouter({ match }) {
  return (
    <>
      { goodsRoutes.map((route) => (
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

            <Route component={Lottie404} />
          </Switch>
        </React.Fragment>
      ))}
    </>
  );
}
export default GoodsRouter;

GoodsRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const Goods = lazy(() => import('@/pages/goods/Goods'));
const Glass = lazy(() => import('@/pages/goods/GoodsDetail').then(module => ({ default: module.Glass })));
const SealSticker = lazy(() => import('@/pages/goods/GoodsDetail').then(module => ({ default: module.SealSticker })));
const Calendar = lazy(() => import('@/pages/goods/GoodsDetail').then(module => ({ default: module.Calendar })));

const goodsRoutes = [
  {
    path: '',
    component: Goods,
    children: [
      {
        path: '/glass',
        component: Glass,
      },
      {
        path: '/seal-sticker',
        component: SealSticker,
      },
      {
        path: '/calendar',
        component: Calendar,
      },
    ],
  },
];
