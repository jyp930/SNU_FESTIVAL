import styled from 'styled-components';
import media from 'styled-media-query';
import { FlexCenterStyle } from '@S/responsive/display';

export const Wrapper = styled.div`
  ${FlexCenterStyle};
  padding: 4rem 0;
`;

export const StyledArchiveSection = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  
  max-width: 800px;
  width: 100%;
  
  ${media.greaterThan('large')`
    max-width: 1000px;
  `};
`;

export const Poster = styled.div`
  width: 100%;
  height: 100%;
  
  img {
    width: 100%;
    pointer-events: none;
    user-select: none;
    border-radius: 10px;
  }
`;

export const Texts = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  
  p {
    color: ${({ theme }) => theme.palette.GRAY90};
    margin: 0;
    line-height: 2;

    &:nth-of-type(1) {
      font-weight: bold;
    }
    
    &:nth-of-type(2) {
      font-size: 2rem;
      font-weight: bold;
    }
  }
`;
