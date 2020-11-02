import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledPictureGrid = styled.div`
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-rows: repeat(4, minmax(0, 12rem));
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  `};
  
  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
  `};
`;

const ItemPositionStyle = css`
  &:nth-of-type(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
  
  &:nth-of-type(2) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
  
  &:nth-of-type(3) {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
  }
  
  &:nth-of-type(4) {
    grid-column: 3 / 5;
    grid-row: 2 / 4;
  }
  
  &:nth-of-type(5) {
    grid-column: 1 / 2;
    grid-row: 3 / 5;
  }
`;

export const Picture = styled.div`
  ${HoverStyle};

  ${media.greaterThan('medium')`
    ${ItemPositionStyle};
  `};
  
  ${media.lessThan('medium')`
    margin: 1rem 0;
    min-height: 10rem;
  `};
  
  .react-reveal {
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  
  object-fit: cover;
`;

export const CenterText = styled.div`
  width: 100%;
  height: 100%;

  font-size: 5rem;

  word-break: keep-all;
  user-select: none;
  
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  ${media.lessThan('medium')`
    display: none;
  `};
`;
