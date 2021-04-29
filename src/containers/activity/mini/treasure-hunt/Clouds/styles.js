import styled, { css } from 'styled-components';

export const Clouds = styled.div` 
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Cloud = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}%`};
  ${props => props.left && css`left: ${props.left}%`};
  ${props => props.right && css`right: ${props.right}%`};
  
  @keyframes float-2 {
    0%{ transform: translateY(600%) translateX(0); }
    100%{ transform: translateY(-800%) translateX(50%); }
  }
  animation: float-2 infinite;
  animation-timing-function: linear;
  animation-duration: ${({ duration }) => duration}s;
`;
