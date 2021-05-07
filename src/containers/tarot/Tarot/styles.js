import styled, { css } from 'styled-components';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledTarot = styled.div`

`;

export const Background = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const flicker = css`
  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 0.9; }
  }
`;

const fluctuation = css`
  @keyframes fluctuation {
    from { transform: scale(1); }
    to { transform: scale(1.15); }
  }
`;

export const Image = styled.img`
  position: absolute;
  width: ${props => props.width}%;
  ${props => props.top && css`top: ${props.top}%`};
  ${props => props.left && css`left: ${props.left}%`};
  ${props => props.right && css`right: ${props.right}%`};
  ${props => props.bottom && css`bottom: ${props.bottom}%`};
  
  ${props => props.flicker && css`
    opacity: 0.3;
    
    ${flicker};
    animation-name: flicker;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-delay: ${props.delay || 0}s;
    animation-duration: ${props.duration || 2}s;
  `};
  
  ${props => props.fluctuation && css`
    opacity: 0.3;
    transform: scale(1); 
   
    ${fluctuation};
    animation-name: fluctuation, flicker;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
    animation-delay: ${props.delay || 0}s;
    animation-duration: ${props.duration || 1}s;
  `};
`;

export const Body = styled.div`
  position: relative;
  width: 100%;
`;

export const Images = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight * (6 / 10)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Bottoms = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight * (3 / 10)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p {
    color: white;
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0.5rem 0;
  }
`;

export const Button = styled.div`
  width: 80%;
  max-width: 500px;
  margin-top: 2rem;
  border-radius: 5px;
  padding: 1.5rem 0;
  box-sizing: border-box;
  ${HoverStyle};

  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.PURPLE75};
  box-shadow: 0 0 10px 0 #a3a9ff;
  background-color: white;
`;
