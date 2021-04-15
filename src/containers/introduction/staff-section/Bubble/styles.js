import styled from 'styled-components';

export const BubbleWrapper = styled.svg`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%
`;

export const Circle = styled.circle`
  will-change: transform;
  animation-name: bubble-${({ index }) => index};
  animation-duration: ${({ duration }) => duration}s;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-timing-function: linear;
  animation-fill-mode: backwards;
  animation-delay: ${({ index }) => index / 5}s;

  @keyframes bubble-${({ index }) => index} {
    0% { transform: translate(0, 0); }
    100% { transform: translate(${({ translate }) => translate.x}%, ${({ translate }) => translate.y}%); }
  }
`;
