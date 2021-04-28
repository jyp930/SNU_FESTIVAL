import styled, { css } from 'styled-components';
import { HoverStyle } from '@S/responsive/mouse';
import { FlexCenterStyle } from '@S/responsive/display';

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

export const NoticeWrapper = styled.div`
  position: absolute;
  top: calc(65px);
  left: 0;
  width: 100%;
  height: 3rem;
  ${FlexCenterStyle};
  z-index: 1;
`;

export const Notice = styled.div`
  width: 85%;
  height: 100%;
  background-color: white;
  padding: 11px 25px 11px 25px;
  box-sizing: border-box;
  border-radius: 18px;
  box-shadow: 0 3px 6px 0 rgba(147, 151, 214, 0.45);
  border: solid 1px ${({ theme }) => theme.palette.PURPLE50};

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  cursor: pointer;

  img {
    width: 10%;
    height: 130%;
  }

  p {
    text-align: center;
    margin: 0;
    width: 90%;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.PURPLE50};
  }
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
