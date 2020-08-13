import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    
    ${media.lessThan('medium')`
       font-size: 12px;
    `};
  }

  body {
    font-family: 'Montserrat', 'NanumSquare', sans-serif;
  }
`;

export const palette = {
  BLUE_NEWTRO: '#094f8c',
  DARK_BLUE_NEWTRO: '#023c7f',
  DARK_BLUE20_NEWTRO: '#013a65',
  DARK_BLUE30_NEWTRO: '#1e243c',
  LIGHT_BLUE_NEWTRO: '#0f6eb2',
  RED_NEWTRO: '#d01725',
  RED20_NEWTRO: '#cf010c',
  RED30_NEWTRO: '#b20200',
  GREEN_NEWTRO: '#2e693b',
  ORANGE_NEWTRO: '#e05335',

  GRAY_NEWTRO: '#eeeeee',
  GRAY20_NEWTRO: '#d3c5bb',

  BROWN_NEWTRO: '#b57144',
  BROWN20_NEWTRO: '#d8a41a',

  WHITE_NEWTRO: '#fff6ed',
  WHITE20_NEWTRO: '#efe7ce',

  BLACK_NEWTRO: '#1c0b01',
};

export const zIndex = {
  base: 1,
  header: 9999,
};