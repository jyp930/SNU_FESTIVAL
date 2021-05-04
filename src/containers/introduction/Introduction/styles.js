import styled from 'styled-components';

export const StyledIntroduction = styled.div`
  height: ${({ theme }) => theme.windowHeight}px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
`;

export const Balloon = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => width}px;
  height: auto;
  
  @keyframes crazy {
    0% { transform: translate(0, 0); }
    25% { transform: translate(90vw, 0); }
    50% { transform: translate(90vw, 90vh); }
    75% { transform: translate(0, 90vh); }
    100% { transform: translate(0, 0); }
  }
  will-change: transform;
  animation-name: crazy;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  
  cursor: pointer;
`;
