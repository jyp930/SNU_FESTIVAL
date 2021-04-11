import styled from 'styled-components';
import media from 'styled-media-query';
import { FlexCenterStyle, ResponsiveWidthStyle, ResponsiveHeightStyle } from '@S/responsive/display';

export const StyledPromotionVideoSection = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;

  margin: 3rem 0;
  ${media.lessThan('medium')`
    margin: 2rem 0;
  `};
`;

export const VideoWrapper = styled.div`
  ${ResponsiveWidthStyle};
  ${ResponsiveHeightStyle};
`;

export const Text = styled.p`
  margin-top: 3rem;
  color: white;
  font-weight: bold;
`;
