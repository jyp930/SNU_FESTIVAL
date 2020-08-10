import styled from 'styled-components';
import media from 'styled-media-query';
import { ResponsiveImageStyle } from '@/static/style/responsive';

export const StyledNewtroCompetitionImage = styled.div`
 
`;

export const FlexibleContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  
  ${media.lessThan('medium')`
    flex-direction: column;
  `};
`;

export const ImageItem = styled.div`
  ${ResponsiveImageStyle};
`;
