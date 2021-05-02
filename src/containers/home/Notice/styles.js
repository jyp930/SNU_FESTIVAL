import styled from 'styled-components';
import media from 'styled-media-query';
import { FlexCenterStyle } from '@S/responsive/display';

export const NoticeWrapper = styled.div`
  position: fixed;
  top: 65px;
  left: 0;
 
  ${media.greaterThan('medium')`
    top: 75px;
  `};
  
  width: 100%;
  height: 36px;
  
  ${FlexCenterStyle};
  z-index: ${({ theme }) => theme.zIndex.base};
  font-size: 12px;
`;

export const Notice = styled.div`
  width: 346px;
  @media screen and (max-width: 375px) {
    width: 300px;
  }
  
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

export const TimeTable = styled.img`
  min-width: 264px;

  @media (orientation: landscape) {
    width: auto;
    height: 100%;
  }
  
  @media (orientation: portrait) {
    width: 100%;
    height: auto;
  }
`;
