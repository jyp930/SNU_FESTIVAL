import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';

/** css import */
import 'sal.js/dist/sal.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'reactjs-popup/dist/index.css';

import { initializeFirebase, initializeGA } from '@/initialize';

initializeGA();
initializeFirebase();

// noinspection JSCheckFunctionSignatures
ReactDOM.render(
  /** LazyLoad library 때문에 strictMode 사용 불가 */
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root'),
);
