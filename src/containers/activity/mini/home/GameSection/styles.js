import styled from 'styled-components';
import media from 'styled-media-query';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledGameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GameWrapper = styled.div`
  width: 100%;
  ${FlexCenterStyle};
  flex-wrap: wrap;

  margin-top: 5rem;
  ${media.lessThan('medium')`
    margin-top: 3rem;
  `};
`;

export const Game = styled.div`
  position: relative;
  width: 25%;
  ${HoverStyle};
  align-self: flex-end;
  
  ${media.lessThan('medium')`
    width: 50%;
    max-width: 150px;
  `};
  
  img:first-of-type {
    width: 100%;
  }
`;

export const Complete = styled.img`
  position: absolute;
  right: 0;
  bottom: 5%;
  width: 10rem;
  height: 7.5rem;
`;

export const ClearButton = styled.div`
  width: 35%;
  max-width: 300px;
  ${HoverStyle};

  img {
    width: 100%;
  }
`;
