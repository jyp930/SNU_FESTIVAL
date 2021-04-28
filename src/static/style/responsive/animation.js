import { css } from 'styled-components';

export const VibrateAnimation = css`
  @keyframes vibrate {
    0% { transform: rotate(3deg) }
    33% { transform: rotate(-3deg) }
    66% { transform: rotate(3deg) }
    100% { transform: rotate(3deg); }
  }
  
  transform: rotate(3deg);
  animation-name: vibrate;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
`;
