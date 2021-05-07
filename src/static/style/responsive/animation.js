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

export const FluctuationAnimation = css`
  @keyframes fluctuation-2 {
    from { transform: scale(0.6); }
    to { transform: scale(0.9); }
  }
  
  transform: scale(1);
  animation-name: fluctuation-2;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
`;
