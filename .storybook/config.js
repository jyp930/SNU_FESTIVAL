import React from 'react';

import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '@S/index';

/** css import */
import 'sal.js/dist/sal.css';
import 'antd/dist/antd.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

addDecorator(s => (
  <>
    <GlobalStyle/>
    {s()}
  </>
));
