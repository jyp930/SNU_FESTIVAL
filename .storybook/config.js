import React from 'react';

import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '@S/index';

import { Provider } from 'react-redux';
import reduxRoot from '@/redux/common/store';

/** css import */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'reactjs-popup/dist/index.css';
import 'react-toastify/dist/ReactToastify.css';

addDecorator(s => (
  <Provider store={reduxRoot.store}>
    <GlobalStyle/>
    {s()}
  </Provider>
));
