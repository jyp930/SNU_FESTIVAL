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

addDecorator(s => {
  const [windowHeight, setWindowHeight] = useState(0);
  const themeWithWindowHeight = useMemo(() => ({ ...theme, windowHeight }), [windowHeight]);
  const onResize = () => {
    setWindowHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <ThemeProvider theme={themeWithWindowHeight}>
      <Provider store={reduxRoot.store}>
        <GlobalStyle/>
        {s()}
      </Provider>
    </ThemeProvider>
  );
})
