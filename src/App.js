import React, { Suspense, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from '@/routes';
import GaAnalytics from '@/UserAnalytics';
import { GA_TRACKING_KEY } from '@/config';
import { GlobalStyle, theme } from '@S/index';
import Header from '@F/layout/Header';
import LottieLoadingPacMan from '@F/lottie/LottieLoadingPackman';
import Lottie404 from '@F/lottie/Lottie404';
import MouseTrail from '@F/animation/MouseTrail';
import Toast from '@F/Toast';
import { ThemeProvider } from 'styled-components';
import useResize from '@U/hooks/useResize';

function App() {
  useEffect(() => {
    console.log('또 열어봤네!!❣ 실례가 안 된다면 콘솔 닫고 방명록 하나만 남겨주십시오😇');
  }, []);

  const windowHeight = useResize();
  const themeWithWindowHeight = useMemo(() => ({ ...theme, windowHeight }), [windowHeight]);

  return (
    <ThemeProvider theme={themeWithWindowHeight}>
      <GlobalStyle />
      <MouseTrail />
      <Toast />

      <Router>
        <Suspense fallback={<LottieLoadingPacMan />}>
          <Header />
          <Switch>
            { routes.map((route) => (
              <Route exact key={route.path} path={route.path} component={route.component} />
            )) }
            <Route component={Lottie404} />
          </Switch>
        </Suspense>

        { GA_TRACKING_KEY && <GaAnalytics /> }
      </Router>
    </ThemeProvider>
  );
}
export default App;
