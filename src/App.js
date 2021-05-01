import React, { Suspense, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from '@/routes';
import GaAnalytics from '@/UserAnalytics';
import { GA_TRACKING_KEY } from '@/config';
import { GlobalStyle, theme } from '@S/index';
import Lottie404 from '@F/lottie/Lottie404';
import MouseTrail from '@F/animation/MouseTrail';
import Toast from '@F/Toast';
import styled, { ThemeProvider } from 'styled-components';
import useResize from '@U/hooks/useResize';
import LoadingMascot from '@F/loading/LoadingMascot';
import { FlexCenterStyle } from '@S/responsive/display';

function App() {
  useEffect(() => {
    console.log('또 열어봤네!!❣ 실례가 안 된다면 콘솔 닫고 방명록 하나만 남겨주십시오😇');
  }, []);

  const [windowWidth, windowHeight] = useResize();
  const themeWithWindowSize = useMemo(() => ({ ...theme, windowHeight, windowWidth }), [windowHeight, windowWidth]);

  return (
    <ThemeProvider theme={themeWithWindowSize}>
      <GlobalStyle />
      <MouseTrail />
      <Toast />

      <Router>
        <Suspense
          fallback={<LoadingWrapper height={windowHeight}><LoadingMascot /></LoadingWrapper>}
        >
          <Switch>
            { routes.map((route) => (
              <Route
                exact={route.exact}
                key={route.path}
                path={route.path}
                component={route.component}
              />
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

const LoadingWrapper = styled.div`
  width: 100%;
  height: ${({ height }) => height}px;
  ${FlexCenterStyle};
`;
