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

export const ResponsiveTextStyle = css`
  font-size: 16px;
  
  ${media.lessThan('medium')`
    font-size: 12px;
  `};
`;
