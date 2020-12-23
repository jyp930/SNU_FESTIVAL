import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';

/** css import */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'reactjs-popup/dist/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { initializeGA } from '@U/initializer/googleAnalytics';

initializeGA();

// noinspection JSCheckFunctionSignatures
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
