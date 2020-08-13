import { css } from 'styled-components';
import media from 'styled-media-query';

export const ResponsiveIconStyle = css`
  width: 60px;
  height: 60px;
  
  ${media.lessThan('medium')`
    width: 40px;
    height: 40px;
  `};
`;

export const ResponsiveFlexItemStyle = css`
  width: 40vw;
  height: 40vw;
  
  ${media.lessThan('medium')`
    width: 47vh;
    height: 47vh;
  `};
`;
