import styled, { css } from 'styled-components';

const flickerAnimation = css`
  @keyframes flicker2 {
    0% { opacity: 1; }
    30% { opacity: 0; }
    60% { opacity: 1; }
    100% { opacity: 0; }
  }
  
  &.Flicker2.active {
    animation-name: flicker2;
    animation-duration: 0.35s;
    animation-iteration-count: 1;
  }
`;

export const StyledFlicker2 = styled.div`
  position: absolute;

  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  background-color: ${({ theme }) => theme.base2};

  opacity: 0;
  ${flickerAnimation};
`;
