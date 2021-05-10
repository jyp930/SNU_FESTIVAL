import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledTreasureHunt = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Background = styled.div`
  z-index: -1;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000%;
  background-image: linear-gradient(to top, #87c7e8, #87c7e8, #778fce 7%, #5069aa 14%, #524980 24%, #595588 32%, #ce8da2 47%, #778fce 69%, #87c7e8 90%, #87c7e8 100%);

  @keyframes background-sky {
    0% { background-position: 0 0; }
    100% { background-position: 0 -${({ theme }) => theme.windowHeight * 10}px; }
  }
  will-change: background-position;
  background-position: 0 0;
  animation-name: background-sky;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 15s;
`;

export const Body = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;

  padding: 2rem;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.base};
`;

export const Button = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-color: white;
  color: ${({ theme }) => theme.palette.PURPLE50};
  ${FlexCenterStyle};
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 0 20px 0 white;
  
  ${HoverStyle};
  z-index: ${({ theme }) => theme.zIndex.base};
`;
