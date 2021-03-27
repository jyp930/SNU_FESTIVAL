import styled from 'styled-components';

export const StyledExplosion1 = styled.div`
  overflow: hidden;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
`;

export const Svg = styled.svg`
  width: 150%;
  height: 150%;
  transform: rotate(${({ rotate }) => rotate}deg);
`;

export const Circle = styled.circle`
  will-change: transform;

  visibility: hidden;
  &.active {
    visibility: visible;
    animation-name: explosion1-${({ index }) => index};
    animation-duration: 0.35s;
  }

  @keyframes explosion1-${({ index }) => index} {
    0% { transform: translate(0, 0); }
    100% { transform: translate(${({ translate }) => translate.x}%, ${({ translate }) => translate.y}%); }
  }
`;
