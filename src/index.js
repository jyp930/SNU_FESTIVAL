import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from '@/App';
import { GA_TRACKING_KEY } from '@/config';

/** css import */
import 'sal.js/dist/sal.css';

if (GA_TRACKING_KEY) ReactGA.initialize(GA_TRACKING_KEY);

ReactDOM.render(
  // TODO: visibility-sensor 에서 오류가 나서 주석처리해 둔 상태. StrictMode 살리기
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root'),
);
