import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from '@/App';
import { GA_TRACKING_KEY } from '@/config';

ReactGA.initialize(GA_TRACKING_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
