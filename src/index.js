import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from '@/App';
import { GA_TRACKING_KEY } from '@/config';

/** css import */
import 'sal.js/dist/sal.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'reactjs-popup/dist/index.css';

if (GA_TRACKING_KEY) ReactGA.initialize(GA_TRACKING_KEY);

// noinspection JSCheckFunctionSignatures
ReactDOM.render(
  /** LazyLoad library 때문에 strictMode 사용 불가 */
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root'),
);
