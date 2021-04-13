import styled from 'styled-components';
import media from 'styled-media-query';
import { FlexCenterStyle } from '@S/responsive/display';
import { rgba } from 'polished';

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

export const Title = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.PURPLE70};
  font-weight: bold;
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
  margin-top: 1rem;
  
  p {
    color: ${({ theme }) => theme.palette.GRAY90};
    margin: 0;
    line-height: 1.6;

    &:nth-of-type(1) {
      font-size: 1.2rem;
      font-weight: bold;
      color: transparent;
      -webkit-text-stroke: 1px ${({ theme }) => theme.palette.PURPLE70}
    }
    
    &:nth-of-type(2) {
      font-size: 2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.palette.PURPLE70};
      text-shadow: 0 0 6px rgba(147, 151, 214, 0.45);
    }
    
    &:nth-of-type(3) {
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: bold;
      color: ${({ theme }) => rgba(theme.palette.PURPLE50, 0.45)};
    }
  }
`;
