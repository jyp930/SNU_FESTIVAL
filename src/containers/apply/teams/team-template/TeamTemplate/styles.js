import styled from 'styled-components';
import media from 'styled-media-query';
import { palette } from '@S/index';

export const StyledTeamTemplate = styled.div`
  position: relative;
  width: calc(100% / 4);
  height: 45vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${media.lessThan('large')`
    width: calc(100% / 2);
    height: 50vh;
  `};
  
  ${media.lessThan('medium')`
    width: 100%;
    height: 50vh;
  `};
  
  &:nth-of-type(1) {
    background-color: ${palette.BLUE_PASTEL};
  }
  &:nth-of-type(2) {
    background-color: ${palette.GREEN_PASTEL};
  }
  &:nth-of-type(4) {
    background-color: mediumpurple;
  }
  &:nth-of-type(3) {
    background-color: ${palette.YELLOW20_PASTEL};
  }
`;

export const Name = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 1rem;
  font-weight: bold;
`;

export const Core = styled.p`
  margin: 0;
  width: 80%;

  font-size: 2rem;
  font-weight: lighter;
  text-align: center;
  word-break: keep-all;
`;
