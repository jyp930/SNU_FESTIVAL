import styled, { css } from 'styled-components';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledMobileHome = styled.div`
  position: relative;
  width: 100%;
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #A2CCE9;
`;

export const Title = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  p {
    overflow-x: hidden;
    margin: 0;
    color: ${props => props.theme.palette.PURPLE50};
    font-weight: lighter;
    
    &:first-child {
      font-size: 12px;
    }
    
    &:last-child {
      font-size: 16px;
      font-family: 'PFStardust', sans-serif;
      line-height: 1.2;
    }
  }
`;

export const IslandWrapper = styled.div`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

export const Island = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Landmark = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}%`};
  ${props => props.left && css`left: ${props.left}%`};
  ${props => props.right && css`right: ${props.right}%`};
  ${props => props.bottom && css`bottom: ${props.bottom}%`};
  
  ${HoverStyle};
  &:hover {
    transform: scale(1.04);
  }
`;
