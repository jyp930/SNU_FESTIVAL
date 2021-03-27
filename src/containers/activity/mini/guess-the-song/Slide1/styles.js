import styled, { css } from 'styled-components';

export const StyledSlide1 = styled.div`
  overflow: hidden;
  position: absolute;

  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  
  opacity: 0;
  &.active {
    opacity: 1;
  }
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
  ${(props) => css`
    transform: rotate(${props.rotate}deg) scale(${props.scale});
  `};
`;

export const Path = styled.path`
  fill: ${({ theme }) => theme.base5};
`;
