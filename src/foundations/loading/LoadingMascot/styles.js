import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledLoadingMascot = styled.div`
  width: 100%;
  height: 100%;
  max-width: 140px;
  max-height: 140px;

  ${media.lessThan('medium')`
    max-width: 100px;
    max-height: 100px;
  `};
  
  img {
    width: 100%;
    height: 100%;
  }
`;
