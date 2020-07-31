import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import routes from '@/routes';
import UserAnalytics from '@/UserAnalytics';
import { GA_TRACKING_KEY } from '@/config';

function App() {
  console.log(process.env);
  return (
    <Router basename="/">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          { routes.map((route) => (
            <Route exact key={route.path} path={route.path} component={route.component} />
          )) }
        </Switch>
      </Suspense>

      { GA_TRACKING_KEY && <UserAnalytics /> }
    </Router>
  );
}
export default App;
