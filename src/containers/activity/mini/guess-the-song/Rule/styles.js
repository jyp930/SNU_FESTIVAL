import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';

export const StyledRule = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;

  ${FlexCenterStyle};
  flex-direction: column;
`;

export const Texts = styled.div`
  width: 80%;
  max-width: 500px;

  p {
    color: white;
  }
  p:nth-of-type(1) {
    margin: 0 0 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    ${media.lessThan('medium')`
      font-size: 1.5rem;
    `};
  }
  p:nth-of-type(2) {
    margin: 0 0 1rem;
    font-size: 1rem;
    line-height: 1.6;
    ${media.lessThan('medium')`
      font-size: 1.2rem;
    `};
  }
  p:nth-of-type(3) {
    text-align: right;
    font-size: 0.5rem;
  }
`;
