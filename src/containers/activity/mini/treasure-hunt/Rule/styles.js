import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';

export const StyledRule = styled.div`
  width: 100%;
  height: auto;

  ${FlexCenterStyle};
  flex-direction: column;
`;

export const Texts = styled.div`
  width: 95%;
  max-width: 500px;

  p {
    color: white;
    word-break: keep-all;
  }
  p:nth-of-type(1) {
    margin: 0 0 1rem;
    font-size: 1.3rem;
    font-weight: bold;
    ${media.lessThan('medium')`
      font-size: 1.5rem;
    `};
  }
  p:nth-of-type(2) {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    ${media.lessThan('medium')`
      font-size: 0.9rem;
    `};
  }
`;
