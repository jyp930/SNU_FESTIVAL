import styled from 'styled-components';
import '@/static/font/font.css';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledHome = styled.div`
  height: ${({ theme }) => theme.windowHeight}px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
    
  margin-top: -30px;
  ${FlexCenterStyle};
  flex-direction: column;

  font-family: 'PFStardust', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  word-break: keep-all;
  color: ${props => props.theme.palette.PURPLE50};
  text-align: center;
  
  & > p {
    margin: 0;
  }
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
