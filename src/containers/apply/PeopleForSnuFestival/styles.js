import styled from 'styled-components';
import media from 'styled-media-query';
import { palette } from '@S/index';

export const StyledPeopleForSnuFestival = styled.div`
  width: 100%;
  height: 55vh;
  min-height: 500px;
  
  background-color: ${palette.PINK_PASTEL};
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${media.lessThan('medium')`
    height: 100vh;
    flex-direction: column;
  `};
`;

export const Section = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  ${media.lessThan('medium')`
    width: 80%;
    text-align: center;
  `};
`;

export const Name = styled.p`
  font-size: 1rem;
  margin: 0;
`;

export const CoreText = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 10px;
  word-break: keep-all;
`;

export const Description = styled.p`
  font-size: 1.3rem;
  font-weight: lighter;
  word-break: keep-all;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;
