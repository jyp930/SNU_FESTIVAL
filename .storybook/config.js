import React from 'react';

import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '@S/index';

/** css import */
import 'sal.js/dist/sal.css';
import 'antd/dist/antd.css';

addDecorator(s => (
  <>
    <GlobalStyle/>
    {s()}
  </>
));
