import styled, { css } from 'styled-components';

const flickerAnimation = css`
  @keyframes flicker1 {
    0% { opacity: 1; }
    10% { opacity: 0; }
    15% { opacity: 1; }
    40% { opacity: 0; }
    45% { opacity: 1; }
    70% { opacity: 1; }
    75% { opacity: 0; }
    78% { opacity: 1; }
    80% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  &.Flicker1.active {
    animation-name: flicker1;
    animation-duration: calc(0.35s / 2);
    animation-iteration-count: 2;
  }
`;

export const StyledFlicker1 = styled.div`
  position: absolute;

  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  background-color: ${({ theme }) => theme.base1};

  opacity: 0;
  ${flickerAnimation};
`;
