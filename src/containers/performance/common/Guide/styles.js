import styled from 'styled-components';
import media from 'styled-media-query';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledGuide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.lessThan('large')`
    align-items: center;
  `};
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lessThan('large')`
    text-align: center;
  `};
  
  p {
    margin: 0;
    line-height: 1.6;
    font-weight: 500;
  }
  
  p:nth-of-type(1) {
    color: ${({ theme }) => theme.palette.GRAY80};
    font-size: 1.1rem;
    font-weight: bold;
  }
  
  p:nth-of-type(2) {
    color: ${({ theme }) => theme.palette.GRAY80};
    font-size: 1.1rem;
  }
  
  p:nth-of-type(3) {
    color: ${({ theme }) => theme.palette.GRAY80};
    font-size: 1.1rem;
  }
  
  p:last-of-type {
    color: ${({ theme }) => theme.palette.PURPLE50};
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

export const Button = styled.div`
  margin: 1.5rem 0 0;
  ${FlexCenterStyle};
  width: 100%;
  max-width: 550px;
  height: 4rem;

  color: white;
  background-color: ${({ theme }) => theme.palette.PURPLE50};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  
  ${HoverStyle};
`;
