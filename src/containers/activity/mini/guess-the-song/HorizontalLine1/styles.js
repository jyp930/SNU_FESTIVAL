import styled, { css } from 'styled-components';

const strokeAnimation = css`
  @keyframes stroke {
    0% { transform: scaleX(0); transform-origin: left 0; }
    50% { transform: scaleX(1); transform-origin: left 0; }
    51% { transform: scaleX(1); transform-origin: right 0; }
    100% { transform: scaleX(0); transform-origin: right 0; }
  }
  
  &.HorizontalLine1.active rect {
    animation-name: stroke;
    animation-duration: 0.35s;
    animation-iteration-count: 1;
  }
`;

export const StyledHorizontalLine1 = styled.div`
  position: absolute;
  width: 100%;
  height: ${({ height }) => height}px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${strokeAnimation};
`;

export const Svg = styled.svg`
  transform: rotate(${(props) => (props.reverse ? 180 : 0)}deg);
`;

export const Rect = styled.rect`
  fill: ${({ theme }) => theme.base3};
  transform: scaleX(0);
`;
