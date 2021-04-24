import React, { useEffect, useMemo, useState } from 'react';

import { addDecorator } from '@storybook/react';
import { GlobalStyle, theme } from '@S/index';

import { Provider } from 'react-redux';
import reduxRoot from '@/redux/common/store';

/** css import */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'reactjs-popup/dist/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import useResize from '@U/hooks/useResize';

addDecorator(s => {
  const [windowWidth, windowHeight] = useResize();
  const themeWithWindowSize = useMemo(() => ({ ...theme, windowHeight, windowWidth }), [windowHeight, windowWidth]);

  return (
    <ThemeProvider theme={themeWithWindowSize}>
      <Provider store={reduxRoot.store}>
        <GlobalStyle/>
        {s()}
      </Provider>
    </ThemeProvider>
  );
})
