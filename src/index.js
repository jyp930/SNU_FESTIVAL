import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '@/App';
import ReactGA from 'react-ga';
import { GA_TRACKING_KEY } from '@/config';

ReactGA.initialize(GA_TRACKING_KEY);
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
