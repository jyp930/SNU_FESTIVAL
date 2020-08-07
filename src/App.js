import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from '@/routes';
import GaAnalytics from '@/UserAnalytics';
import { GA_TRACKING_KEY } from '@/config';
import { GlobalStyle } from '@/static/style';

import LottieLoadingPacMan from '@/foundations/lottie/LottieLoadingPackman';
import Lottie404 from '@/foundations/lottie/Lottie404';

function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Suspense fallback={<LottieLoadingPacMan />}>
          <Switch>
            { routes.map((route) => (
              <Route exact key={route.path} path={route.path} component={route.component} />
            )) }
            <Route component={Lottie404} />
          </Switch>
        </Suspense>

        { GA_TRACKING_KEY && <GaAnalytics /> }
      </Router>
    </>
  );
}
export default App;
