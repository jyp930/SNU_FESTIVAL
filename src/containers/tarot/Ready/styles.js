import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledReady = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  div {
    width: 100%;
    height: 100%;
    ${FlexCenterStyle};
    flex-direction: column;
  }
  
  @keyframes appear-2 {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  img {
    width: 100%;
    min-width: 260px;
    max-width: 400px;
    
    opacity: 0;
    animation-name: appear-2;
    animation-duration: 2.5s;
    animation-fill-mode: forwards;
    
    &:first-of-type {
      animation-delay: 1s;
    }
    &:last-of-type {
      animation-delay: 3s;
    }
  }
`;
