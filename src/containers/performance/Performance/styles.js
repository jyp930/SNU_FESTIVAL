import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledPerformance = styled.div`
  max-width: 1140px;
  margin: auto;
  
  ${media.lessThan('large')`
    max-width: 960px;
  `};
  
  ${media.lessThan('medium')`
    max-width: 720px;
  `};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardItem = styled.div`
  width: calc(100% / 3);
  height: 500px;
  
  box-sizing: border-box;
  padding: 15px;
  
  ${media.lessThan('large')`
    width: calc(100% / 2);
  `};
  
  ${media.lessThan('medium')`
    width: 100%;
  `};
`;
