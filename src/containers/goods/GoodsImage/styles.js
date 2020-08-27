import styled from 'styled-components';
import { zIndex } from '@S/index';
import media from 'styled-media-query';

export const ImageWrapper = styled.div`
  position: fixed;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: ${zIndex.base};
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.lessThan('medium')`
    width: 25vw;
    height: 25vw;
  `};
  ${media.greaterThan('medium')`
    width: 20vh;
    height: 20vh;
  `};
`;

export const StyledGoodsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  &:hover {
    transition: 1s;
    width: 200%;
    height: 200%;
    z-index: 5;
  }
`;
