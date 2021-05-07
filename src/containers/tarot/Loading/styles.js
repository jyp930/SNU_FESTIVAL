import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';

export const StyledLoading = styled.div` 
  width: 100%;
  height: 100%;
  ${FlexCenterStyle};

  img {
    width: 10%;
    ${media.lessThan('medium')`
      width: 30%;
    `};
    ${media.between('medium', 'large')`
      width: 20%;
    `};
    
    @keyframes rotate-card {
      from { transform: rotateY(0) rotateZ(-30deg); }
      to { transform: rotateY(360deg) rotateZ(-30deg); }
    }

    animation-name: rotate-card;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 1s;
  }
`;
