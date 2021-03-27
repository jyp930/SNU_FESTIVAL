import styled from 'styled-components';

export const StyledExplosion2 = styled.div`
  overflow: hidden;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
`;

export const Svg = styled.svg`
  width: 200%;
  height: 200%;
  transform: rotate(${({ rotate }) => rotate}deg);
`;

export const Group = styled.g`
  fill: ${(props) => props.theme[`base${(props.index % 5) + 1}`]};
`;

export const Circle = styled.circle`
  will-change: transform;
  visibility: hidden;
  &.active {
    visibility: visible;
    animation-name: explosion2-${({ index }) => index};
    animation-duration: 0.35s;
  }

  @keyframes explosion2-${({ index }) => index} {
    0% { transform: translate(0, 0); }
    100% { transform: translate(${({ translate }) => translate.x}%, ${({ translate }) => translate.y}%); }
  }
`;
