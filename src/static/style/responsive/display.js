import { css } from 'styled-components';
import media from 'styled-media-query';

export const FlexCenterStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResponsiveWidthStyle = css`
  ${media.greaterThan('large')`
    width: ${props => props.widths[0]}px;
  `};
  ${media.between('medium', 'large')`
    width: ${props => props.widths[1]}px;
  `};
  ${media.lessThan('medium')`
    width: ${props => props.widths[2]}px;
  `};
`;

export const ResponsiveHeightStyle = css`
  ${media.greaterThan('large')`
    height: ${props => props.heights[0]}px;
  `};
  ${media.between('medium', 'large')`
    height: ${props => props.heights[1]}px;
  `};
  ${media.lessThan('medium')`
    height: ${props => props.heights[2]}px;
  `};
`;
