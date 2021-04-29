import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledTreasureHunt = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  overflow-y: hidden;

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
  background-image: linear-gradient(to top, #87c7e8, #87c7e8 10%, #51477f 15%, #44407b 26%, #ce8da2 38%, #778fce 69%, #87c7e8 90%, #87c7e8);

  @keyframes background-sky {
    0% { background-position: 0 0; }
    100% { background-position: 0 -${({ theme }) => theme.windowHeight * 9}px; }
  }
  will-change: background-position;
  background-position: 0 0;
  animation-name: background-sky;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 10s;
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
`;

export const Balloons = styled.div`
  position: relative;
  width: 100%;
  height: 40%;
`;

export const Balloon = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}%`};
  ${props => props.left && css`left: ${props.left}%`};
  ${props => props.right && css`right: ${props.right}%`};
  
  @keyframes float-${({ index }) => index} {
    0%, 100%{ transform:translateY(0) rotate(-4deg); }
    50%{ transform:translateY(-25px) rotate(4deg); }
  }
  animation: float-${({ index }) => index} infinite;
  animation-duration: ${({ duration }) => duration}s;
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
`;
