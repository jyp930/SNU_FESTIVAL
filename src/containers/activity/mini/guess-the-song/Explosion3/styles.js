import styled from 'styled-components';

export const StyledExplosion3 = styled.div`
  overflow: hidden;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(${({ rotate }) => rotate}deg);
`;

export const Group = styled.g`
  stroke: ${(props) => props.theme[`base${(props.index % 5) + 1}`]};
  transition: stroke 0.35s;
`;

export const Circle = styled.circle`
  will-change: transform;
  visibility: hidden;
  &.active {
    visibility: visible;
    animation-name: explosion3-${({ index }) => index};
    animation-duration: 0.35s;
    animation-delay: ${({ index }) => index * 0.02}s;
  }

  @keyframes explosion3-${({ index }) => index} {
    0% { stroke-width: 40; transform: translate(${({ translate }) => translate.x}%, ${({ translate }) => translate.y}%) scale(0);  }
    80% { stroke-width: 3; transform: translate(${({ translate }) => translate.x}%, ${({ translate }) => translate.y}%) scale(1); }
    100% { stroke-width: 0; transform: translate(${({ translate }) => translate.x}%, ${({ translate }) => translate.y}%) scale(1.3); }
  }
`;
