import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

export const palette = {
  // NEWTRO
  ORANGE_NEWTRO: '#e05335',
  GRAY_NEWTRO: '#eeeeee',
  WHITE_NEWTRO: '#fff6ed',
  WHITE20_NEWTRO: '#efe7ce',
  BLACK_NEWTRO: '#1c0b01',

  // PASTEL
  RED_PASTEL: '#ffb3ba',
  PINK_PASTEL: '#fddde6',

  ORANGE_PASTEL: '#ffdfba',

  YELLOW_PASTEL: '#ffffba',
  YELLOW20_PASTEL: '#FFD232',
  YELLOW30_PASTEL: '#ffb400',
  YELLOW40_PASTEL: '#ff8200',
  YELLOW50_PASTEL: '#FF9100',
  YELLOW60_PASTEL: '#FF9100',

  GREEN_PASTEL: '#baffc9',

  BLUE_PASTEL: '#bae1ff',
  BLUE20_PASTEL: '#93daff',
  BLUE30_PASTEL: '#50c8ff',
  BLUE40_PASTEL: '#1e96ff',
  BLUE50_PASTEL: '#0a82ff',
};

export const zIndex = {
  base: 1,
  header: 50,
  fullScreen: 100,
  mouseTrail: 10000,
};

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    
    ${media.lessThan('medium')`
       font-size: 12px;
    `};
  }

  body {
    margin: 0;
    font-family: 'Montserrat', 'NanumSquare', sans-serif;
    
    & ::selection {
      background-color: ${palette.PINK_PASTEL};
      color: white;
    }
    
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
    & ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;
